<?php

namespace Database\Seeders;

use App\Models\Grade;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Grade::query()->insert([
            [
                "id" => 1,
                "name" => "I",
            ],
            [
                "id" => 2,
                "name" => "II",
            ],
            [
                "id" => 3,
                "name" => "III",
            ],
            [
                "id" => 4,
                "name" => "IV",
            ],
        ]);
    }
}
