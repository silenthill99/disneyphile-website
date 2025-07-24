<?php

use App\Models\User;
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

    Route::get('/members', function () {
        $users = User::all();
        return Inertia::render('members/index', compact('users'));
    })->name('members.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
