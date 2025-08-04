<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GroupController extends Controller
{
    public function index()
    {
        $groups = Group::with(["owner", "groupMembers"])->paginate(10);
        return Inertia::render("groups/index", compact("groups"));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'private' => 'required|boolean',
            'banniere' => "nullable|image|max:8000",
            'description' => "required|string"
        ]);

        $imageFile = $request->file('banniere');
        $imageName = time() . "_" . $imageFile->getClientOriginalName();
        $data["bannier"] = "/storage/".$imageFile->storeAs("images", $imageName, "public");

        Auth::user()->createdGroups()->create($data);

        return redirect()->back()->with('createdGroup', "Groupe créé avec succès");
    }

    public function show(Group $group)
    {
        return $group;
    }

    public function update(Request $request, Group $group)
    {
        $data = $request->validate([

        ]);

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
