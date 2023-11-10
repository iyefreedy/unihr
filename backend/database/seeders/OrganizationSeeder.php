<?php

namespace Database\Seeders;

use App\Models\Organization;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $organization = new Organization;
        $organization->id = 1;
        $organization->name = "Pusat Komputer dan Inovasi Digital";
        $organization->email = "pkid@uai.ac.id";
        $organization->save();

        $organization = new Organization;
        $organization->id = 2;
        $organization->name = "Direktorat Administasi dan Fasilitas Akademik";
        $organization->email = "dafa@uai.ac.id";
        $organization->save();

        $organization = new Organization;
        $organization->id = 3;
        $organization->name = "Direktorat Sumber Daya Manusia";
        $organization->email = "sdm@uai.ac.id";
        $organization->save();
    }
}
