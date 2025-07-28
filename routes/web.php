<?php

use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\GuestToLanding;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/members', [UserController::class, "index"])->name('members.index');

    Route::get('/tags', [TagController::class, "index"])->name('tags.index');
    Route::post('/tags', [TagController::class, "store"])->name('tags.store');
    Route::post("/test-tags/{user:slug}/attach/{tag}", [TagController::class, 'attach'])->name('tags.attach');
});

Route::middleware(GuestToLanding::class)->group(function () {
    Route::get('/', function () {
        return Inertia::render('welcome');
    })->name('home');
;
    Route::post("/", function () {
        return Inertia::render('welcome');
    })->name('search');
});

Route::get("/landing", function () {
    return Inertia::render('landing');
})->name('landing');

Route::get("/members/{user}",[UserController::class, "show"])
    ->name('members.show');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
