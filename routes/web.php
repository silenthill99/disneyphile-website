<?php

use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/', function () {
        return Inertia::render('welcome');
    })->name('home');

    Route::post("/", function () {
        return Inertia::render('welcome');
    })->name('search');

    Route::get('/members', [UserController::class, "index"])->name('members.index');

    Route::get('/tags', [TagController::class, "index"])->name('tags.index');
    Route::post('/tags', [TagController::class, "store"])->name('tags.store');
    Route::post("/tags/attach", [TagController::class, "attach"])->name('tags.attach');
});

Route::get("/members/{user}",[UserController::class, "show"])
    ->name('members.show');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
