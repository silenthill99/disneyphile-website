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
        return Inertia::render('members/show', [
            'user' => $user,
            'can' => [
                'view' => Gate::allows('view', $user)
            ]
        ]);
    }
}
