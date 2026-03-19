<?php

/** @noinspection PhpUndefinedFunctionInspection */

namespace App\Http\Controllers;

use App\Models\PostImage;
use Illuminate\Http\Request;

class PostImageController extends Controller
{
    public function index()
    {
        return PostImage::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'post_id' => 'required|exists:posts,id',
            'image_path' => 'required|string|max:255',
        ]);

        return PostImage::create($data);
    }

    public function show(PostImage $postImage)
    {
        return $postImage;
    }

    public function update(Request $request, PostImage $postImage)
    {
        $data = $request->validate([
            'image_path' => 'required|string|max:255',
        ]);

        $postImage->update($data);

        return $postImage;
    }

    public function destroy(PostImage $postImage)
    {
        $postImage->delete();

        return response()->json();
    }
}
