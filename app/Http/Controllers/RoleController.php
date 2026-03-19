<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class RoleController extends Controller
{
    public function index()
    {
        Gate::authorize('admin', User::class);

        return Role::all();
    }

    public function store(Request $request)
    {
        Gate::authorize('admin', User::class);

        $data = $request->validate([
            'name' => 'required|string|max:255|unique:roles',
        ]);

        return Role::create($data);
    }

    public function show(Role $role)
    {
        Gate::authorize('admin', User::class);

        return $role;
    }

    public function update(Request $request, Role $role)
    {
        Gate::authorize('admin', User::class);

        $data = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name,'.$role->id,
        ]);

        $role->update($data);

        return $role;
    }

    public function destroy(Role $role)
    {
        Gate::authorize('admin', User::class);

        $role->delete();

        return response()->json();
    }
}
