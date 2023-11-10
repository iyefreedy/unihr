<?php

namespace Tests\Feature;

use App\Models\Organization;
use Database\Seeders\OrganizationSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OrganizationTest extends TestCase
{
    public function test_create_an_organization()
    {
        $organization = new Organization;
        $organization->name = 'Pusat Komputer dan Inovasi Digital';
        $organization->email = 'puskid@uai.ac.id';

        $result = $organization->save();

        $this->assertTrue($result);
    }

    public function test_update_an_organization()
    {
        $this->seed(OrganizationSeeder::class);

        $organization = Organization::query()->find(1);
        $this->assertNotNull($organization);

        $organization->name = 'Direktorat Keuangan';
        $organization->email = 'keuangan@uai.ac.id';
        $result = $organization->save();
        $this->assertTrue($result);
    }

    public function test_delete_an_organization()
    {
        $this->seed(OrganizationSeeder::class);

        $organization = Organization::query()->find(1);
        $this->assertNotNull($organization);

        $result = $organization->delete();
        $this->assertTrue($result);
    }
}
