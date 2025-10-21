<?php

use App\Http\Controllers\GroupController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\GuestToLanding;
use App\Models\Group;
use App\Models\Page;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/members', [UserController::class, "index"])->name('members.index');

    Route::get('/tags', [TagController::class, "index"])->can('admin', User::class)->name('tags.index');
    Route::post('/tags', [TagController::class, "store"])->can('admin', User::class)->name('tags.store');
    Route::post("/tags/{user}/attach/{tag}", [TagController::class, 'attach'])->can('admin', User::class)->name('tags.attach');
    Route::post("/dashboard/{user}", function (User $user, Request $request) {
        $data = $request->validate([
            'photo' => "nullable|image|max:8000"
        ]);
        if ($request->hasFile('photo')) {
            $image = $request->file('photo');
            $imageName = time()."_".$image->getClientOriginalName();
            $data['image_profile'] = $image->storeAs('images', $imageName, 'public');
        }
        $user->update($data);
    })->name("update-profile");

    Route::get("/groups/create", [GroupController::class, "create"])->name("groups.create");
    Route::get('/groups', [GroupController::class, "index"])->name("groups.index");
    Route::post('/groups', [GroupController::class, "store"])->name("groups.store");
    Route::get("/groups/{group}", [GroupController::class, "show"])->name("groups.show");
});

Route::middleware(GuestToLanding::class)->group(function () {

    Route::get('/', function () {
        $posts = Post::with("user", "group")->get();
        $pageList = Page::all();
        return Inertia::render('welcome', compact('posts', 'pageList'));
    })->name('home');

    Route::post("/", function () {
        return Inertia::render('welcome');
    })->name('search');
    Route::post("/{post}/like", [PostController::class, "like"])->name('like');
});

Route::get("/landing", function () {
    return Inertia::render('landing');
})->name('landing');

Route::get("/members/{user}", [UserController::class, "show"])
    ->name('members.show');

Route::get('/rules', function () {
    return Inertia::render('rules');
})->name('rules');

Route::post("/tags/{user}/detach/{tag}", [TagController::class, "removeTagUser"])->name('tags.detach');

Route::resource("pages", PageController::class);

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
