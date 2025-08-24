<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Carbon\Month;
use Carbon\WeekDay;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $name = 'Florian GRAZIANI';
        $roleId = Role::where('name', 'Admin')->firstOrFail()->id;

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('users')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        DB::table('users')->insert([
            'role_id' => $roleId,
            'name' => $name,
            'image_profile' => "images/1753808790_innamoramento.JPG",
            'slug' => Str::slug($name),
            'email' => "florian.graziani@sfr.fr",
            'email_verified_at' => now(),
            'password' => bcrypt('Mylene.10'),
            'remember_token' => null,
            'birth_date' => Carbon::create(1999, 07, 11),
            'created_at' => now(),
            'updated_at' => now()
        ]);

        User::factory()->count(49)->create();
    }
}
