<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Group extends Model
{
    use HasFactory;
    protected $fillable = [
        'owner_id',
        'slug',
        'name',
        'private',
        'description',
        'bannier'
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function groupMembers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, "group_members");
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public static function booted(): void
    {
        static::creating(function (Group $group) {
            $group->slug = Str::slug($group->name);
        });
    }
}
