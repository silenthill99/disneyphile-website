<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function index()
    {
        return Tag::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([

        ]);

        return Tag::create($data);
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
}
