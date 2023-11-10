<?php

namespace Database\Seeders;

use App\Models\Faculty;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faculty = [
            [
                "name" => "Fakultas Sains dan Teknologi",
                "email" => "fst@uai.ac.id",
            ],
            [
                "name" => "Fakultas Ekonomi dan Bisnis",
                "email" => "feb@uai.ac.id",
            ],
            [
                "name" => "Fakultas Ilmu Sosial dan Ilmu Politik",
                "email" => "fisip@uai.ac.id",
            ],
        ];

        Faculty::query()->insert($faculty);
    }
}
