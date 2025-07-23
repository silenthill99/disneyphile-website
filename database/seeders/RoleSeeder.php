<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('roles')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        DB::table('roles')->insert([
            [
                'name' => 'Guest',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                "name" => 'Admin',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
