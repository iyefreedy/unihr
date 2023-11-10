<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\DB;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp(): void
    {
        parent::setUp();

        DB::delete("DELETE FROM employees");
        DB::delete("DELETE FROM organizations");
        DB::delete("DELETE FROM faculties");
    }
}
