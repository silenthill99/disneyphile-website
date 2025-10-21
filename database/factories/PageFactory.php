<?php

namespace Database\Factories;

use App\Models\Page;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Page>
 */
class PageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->name();
        return [
            "owner_id" => User::factory(),
            "title" => $name,
            'slug' => Str::slug($name),
            "description" => $this->faker->paragraph(),
            'image_profile' => null,
            'bannier' => null,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
