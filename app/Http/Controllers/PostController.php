<?php /** @noinspection PhpUndefinedMethodInspection */

    /** @noinspection PhpUndefinedFunctionInspection */

    namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([

        ]);

        $post = Auth::user()->posts()->create($data);

        foreach ($request->file('image') as $image) {
            $imageName = time()."_".$image->getClientOriginalName();
            $imagePath = $image->storeAs('images', $imageName, 'public');
            $post->post_image()->create((array)'image_path', $imagePath);
        }

        return Redirect::back();
    }

    public function show(Post $post)
    {
        return $post;
    }

    public function update(Request $request, Post $post)
    {
        $data = $request->validate([

        ]);

        $post->update($data);

        return $post;
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json();
    }

    public function like(Post $post)
    {
        $post->increment('likes');
        return response()->json(
            ['likes' => $post->likes]
        );
    }
}
