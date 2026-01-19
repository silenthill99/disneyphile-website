<?php

namespace App\Http\Controllers;


use App\Models\User;
use Gate;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('members/index', compact('users'));
    }

    public function show(User $user)
    {
        $user->load(['tags', 'posts', 'posts.post_image']);
        return Inertia::render('members/show', [
            "user" => $user,
            'can' => [
                'view' => Gate::allows('view', $user)
            ],
        ]);
    }
}
