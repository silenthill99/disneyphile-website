<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $name = 'Florian GRAZIANI';

        DB::table('users')->truncate();
        DB::table('users')->insert([
            'role_id' => 2,
            'name' => $name,
            'slug' => Str::slug($name),
            'email' => "florian.graziani@sfr.fr",
            'email_verified_at' => now(),
            'password' => bcrypt('Mylene.10'),
            'remember_token' => null,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
