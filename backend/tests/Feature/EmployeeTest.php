<?php

namespace Tests\Feature;

use App\Models\Employee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EmployeeTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_create_employees_is_succeed(): void
    {
        $this->seed();

        $employee = new Employee;
        $employee->identity_number = '132104980010';
        $employee->name = 'Muhammad Quraisy';
        $employee->birth_date = '1998-04-21';
        $employee->birth_place = 'Bogor';
        $employee->gender = 'male';
        $employee->phone = '087880688799';
        $employee->address = 'Gg. Tiang 2 No.52 RT.004/02';
        $employee->city = 'Bogor';
        $employee->province = 'Jawa Barat';
        $employee->postal_code = '16921';
        $result = $employee->save();

        $this->assertTrue($result);
    }
}
