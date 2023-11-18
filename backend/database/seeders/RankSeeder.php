<?php

namespace Database\Seeders;

use App\Models\Rank;
use Illuminate\Database\Seeder;

class RankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rank::query()->insert([
            // Grade I
            [
                "id" => 1,
                "name" => "A",
                "salary_from" => 1560800,
                "salary_to" => 2335800,
                "grade_id" => 1,
            ],
            [
                "id" => 2,
                "name" => "B",
                "salary_from" => 1704500,
                "salary_to" => 2472900,
                "grade_id" => 1,
            ],
            [
                "id" => 3,
                "name" => "C",
                "salary_from" => 1704500,
                "salary_to" => 2472900,
                "grade_id" => 1,
            ],
            [
                "id" => 4,
                "name" => "D",
                "salary_from" => 1851800,
                "salary_to" => 2686500,
                "grade_id" => 1,
            ],
            // Grade II
            [
                "id" => 5,
                "name" => "A",
                "salary_from" => 2022200,
                "salary_to" => 3373600,
                "grade_id" => 2,
            ],
            [
                "id" => 6,
                "name" => "B",
                "salary_from" => 2208400,
                "salary_to" => 3516300,
                "grade_id" => 1,
            ],
            [
                "id" => 7,
                "name" => "C",
                "salary_from" => 2301800,
                "salary_to" => 3665000,
                "grade_id" => 1,
            ],
            [
                "id" => 8,
                "name" => "D",
                "salary_from" => 2399200,
                "salary_to" => 3820000,
                "grade_id" => 1,
            ],
            // Grade III
            [
                "id" => 9,
                "name" => "A",
                "salary_from" => 2579400,
                "salary_to" => 4236400,
                "grade_id" => 3,
            ],
            [
                "id" => 10,
                "name" => "B",
                "salary_from" => 2688500,
                "salary_to" => 4415600,
                "grade_id" => 3,
            ],
            [
                "id" => 11,
                "name" => "C",
                "salary_from" => 2802300,
                "salary_to" => 4602400,
                "grade_id" => 3,
            ],
            [
                "id" => 12,
                "name" => "D",
                "salary_from" => 2920800,
                "salary_to" => 4797000,
                "grade_id" => 3,
            ],
            // Grade IV
            [
                "id" => 13,
                "name" => "A",
                "salary_from" => 3044300,
                "salary_to" => 5000000,
                "grade_id" => 4,
            ],
            [
                "id" => 14,
                "name" => "B",
                "salary_from" => 3173100,
                "salary_to" => 5211500,
                "grade_id" => 4,
            ],
            [
                "id" => 15,
                "name" => "C",
                "salary_from" => 3307300,
                "salary_to" => 5431900,
                "grade_id" => 4,
            ],
            [
                "id" => 16,
                "name" => "D",
                "salary_from" => 3447200,
                "salary_to" => 5661700,
                "grade_id" => 4,
            ],
            [
                "id" => 17,
                "name" => "E",
                "salary_from" => 3593100,
                "salary_to" => 5901200,
                "grade_id" => 4,
            ],
        ]);
    }
}
