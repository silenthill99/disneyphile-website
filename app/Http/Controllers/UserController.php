<?php

namespace App\Http\Controllers;

use App\Models\User;
use Gate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%');
            })->get();

        return Inertia::render('members/index', compact('users'));
    }

    public function show(User $user)
    {
        $user->load(['tags', 'posts', 'posts.post_image']);

        return Inertia::render('members/show', [
            'user' => $user,
            'can' => [
                'view' => Gate::allows('view', $user),
            ],
        ]);
    }
}
