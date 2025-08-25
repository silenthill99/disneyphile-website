<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement("SET FOREIGN_KEY_CHECKS=0");
        DB::table('tags')->truncate();
        DB::statement("SET FOREIGN_KEY_CHECKS=1");
        DB::table('tags')->insert([
            "name" => "Disneyphile",
            "created_at" => now(),
            "updated_at" => now(),
        ]);
    }
}
