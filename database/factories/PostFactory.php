<?php /** @noinspection PhpUndefinedFunctionInspection */

    namespace Database\Factories;

use App\Models\Group;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Auth;

class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition(): array
    {
        return [
            "user_id" => User::factory(),
            'group_id' => Group::factory(),
            'content' => fake()->realText(),
            'visibility' => fake()->randomElement(['public', 'private']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
