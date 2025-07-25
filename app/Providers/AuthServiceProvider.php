<?php

namespace App\Providers;

use App\Models\User;
use App\Policies\ViewDashboardPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => ViewDashboardPolicy::class
    ];

    public function boot(): void
    {
    }
}
