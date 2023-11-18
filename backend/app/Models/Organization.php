<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Organization extends Model
{
    public function employees(): MorphMany
    {
        return $this->morphMany(EmploymentDetail::class, "employable");
    }
}
