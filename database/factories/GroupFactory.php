<?php

namespace Database\Factories;

use App\Models\Group;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class GroupFactory extends Factory
{
    protected $model = Group::class;

    public function definition(): array
    {
        $disneyWords = [
            'Mickey', 'Magic', 'Disneyland', 'Aurora', 'Fantasia',
            'Pixie', 'Enchanted', 'Castle', 'Dream', 'Adventure',
            'Stitch', 'Frozen', 'LionKing', 'Bambi', 'Tinkerbell'
        ];

        $name = $this->faker->randomElement($disneyWords) . ' ' .
            $this->faker->randomElement(['Club', 'Team', 'Society', 'Fans']);
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'private' => $this->faker->boolean,
            "owner_id" => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
