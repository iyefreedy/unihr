<?php

namespace Tests\Feature;

use App\Models\Faculty;
use Database\Seeders\FacultySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FacultyTest extends TestCase
{
    public function test_create_a_faculty(): void
    {
        $faculty = new Faculty;
        $faculty->name = 'Fakultas Sains dan Teknologi';
        $faculty->email = 'fst@uai.ac.id';

        $result = $faculty->save();

        $this->assertTrue($result);
    }

    public function test_update_a_faculty(): void
    {
        $this->seed(FacultySeeder::class);

        $faculty = Faculty::query()->firstWhere('email', '=', 'fst@uai.ac.id');
        $this->assertNotNull($faculty);
        $faculty->name = 'Fakultas Ilmu Pengetahuan dan Budaya';
        $faculty->email = 'fipb@uai.ac.id';
        $result = $faculty->save();
        $this->assertTrue($result);
    }

    public function test_delete_a_faculty(): void
    {
        $this->seed(FacultySeeder::class);
        $faculty = Faculty::query()->firstWhere('email', '=', 'fst@uai.ac.id');
        $this->assertNotNull($faculty);

        $result = $faculty->delete();
        $this->assertTrue($result);
    }
}
