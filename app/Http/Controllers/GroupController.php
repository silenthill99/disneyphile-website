<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGroupRequest;
use App\Http\Requests\UpdateGroupRequest;
use App\Models\Group;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GroupController extends Controller
{
    public function index()
    {
        $groupList = Group::with(["owner", "groupMembers"])->paginate(10);
        return Inertia::render("groups/index", compact("groupList"));
    }

    public function store(StoreGroupRequest $request)
    {
        $data = $request->validated();

        if($request->hasFile("banniere"))
        {
            $imageFile = $request->file('banniere');
            $imageName = time() . "_" . $imageFile->getClientOriginalName();
            $data["bannier"] = "/storage/".$imageFile->storeAs("images", $imageName, "public");
        }

        Auth::user()->createdGroups()->create($data);

        return redirect()->back()->with('createdGroup', "Groupe créé avec succès");
    }

    public function show(Group $group)
    {
        $group->load(["owner", "groupMembers", "posts"]);
        return Inertia::render("groups/show", compact("group"));
    }

    public function update(UpdateGroupRequest $request, Group $group)
    {
        $data = $request->validated();

        $group->update($data);

        return $group;
    }

    public function destroy(Group $group)
    {
        $group->delete();

        return response()->json();
    }

    public function create() {
        return Inertia::render("groups/create");
    }

}
