<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGroupRequest;
use App\Http\Requests\UpdateGroupRequest;
use App\Models\Group;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GroupController extends Controller
{
    public function index()
    {
        $groupList = Group::with(['owner', 'groupMembers'])->paginate(10);

        return Inertia::render('groups/index', compact('groupList'));
    }

    public function store(StoreGroupRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('banniere')) {
            $imageFile = $request->file('banniere');
            $imageName = time().'_'.$imageFile->getClientOriginalName();
            $data['bannier'] = '/storage/'.$imageFile->storeAs('images', $imageName, 'public');
        }

        Auth::user()->createdGroups()->create($data);

        return redirect()->route('groups.index')->with('success', 'Groupe créé avec succès');
    }

    public function show(Group $group)
    {
        $group->load(['owner', 'groupMembers', 'posts']);

        return Inertia::render('groups/show', compact('group'));
    }

    public function update(UpdateGroupRequest $request, Group $group)
    {
        $data = $request->validated();

        if ($request->hasFile('banniere')) {
            // Delete old image if exists
            if ($group->bannier) {
                $this->deleteImage($group->bannier);
            }

            $imageFile = $request->file('banniere');
            $imageName = time().'_'.$imageFile->getClientOriginalName();
            $data['bannier'] = '/storage/'.$imageFile->storeAs('images', $imageName, 'public');
        }

        $group->update($data);

        return Redirect::route('groups.index');
    }

    public function destroy(Group $group)
    {
        // Delete associated image if exists
        if ($group->bannier) {
            $this->deleteImage($group->bannier);
        }

        $group->delete();

        return Redirect::back();
    }

    public function create()
    {
        return Inertia::render('groups/create');
    }

    public function createdGroups()
    {
        $groupList = Auth::user()->createdGroups;

        return Inertia::render('groups/my-groups', compact('groupList'));
    }

    public function edit(Group $group)
    {
        return Inertia::render('groups/edit', compact('group'));
    }

    public function userGroups(User $user)
    {
        $createdGroups = $user->createdGroups()->paginate(3);
        return Inertia::render('groups/user-groups', compact(['user', 'createdGroups']));
    }

    /**
     * Delete an image from storage.
     */
    private function deleteImage(string $imagePath): void
    {
        // Remove /storage/ prefix to get the actual storage path
        $path = str_replace('/storage/', '', $imagePath);

        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }
}
