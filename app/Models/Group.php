<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

class Group extends Model
{
    use HasFactory;
    protected $fillable = [
        'owner_id',
        'slug',
        'name',
        'private'
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function groupMembers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, "group_members");
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public static function booted(): void
    {
        static::creating(function (Group $group) {
            $slug = Str::slug($group->name);
            $originalSlug = $slug;
            $count = 1;

            while (Group::where('slug', $slug)->exists()) {
                $slug = $originalSlug . "-" . $count++;
            }

            $group->slug = $slug;
        });
    }
}
