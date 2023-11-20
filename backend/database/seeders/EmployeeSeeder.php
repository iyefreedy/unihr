<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Employee::factory()->count(300)->create();
    }
}
