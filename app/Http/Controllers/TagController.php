<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index()
    {
        $tags = Auth::user()->tags;
        $users = User::with('tags')->paginate(25);
        $tags_all = Tag::all();
        return Inertia::render("tags", compact(["tags", "users", "tags_all"]));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required",
        ]);

        Tag::create($data);

        return Redirect::route('tags.index')->with('success', 'Tag created.');
    }

    public function show(Tag $tag)
    {
        return $tag;
    }

    public function update(Request $request, Tag $tag)
    {
        $data = $request->validate([

        ]);

        $tag->update($data);

        return $tag;
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return response()->json();
    }

    public function attach(User $user, Tag $tag) {
        $user->tags()->attach($tag);
        return \redirect()->back();
    }
}
