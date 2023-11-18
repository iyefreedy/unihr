<?php

namespace Database\Factories;

use Faker\Provider\id_ID\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create('id_ID');
        $gender = $faker->randomElement([Person::GENDER_MALE, Person::GENDER_FEMALE]);

        return [
            'identity_number' => $faker->nik(),
            'gender' => $gender,
            'birth_date' => $faker->date('Y-m-d', '2004-12-31'),
            'birth_place' => $faker->city(),
            'address' => $faker->streetAddress(),
            'phone' => $faker->phoneNumber(),
            'postal_code' => $faker->postcode(),
            'city' => $faker->city(),
            'province' => $faker->country(),
        ];
    }
}
