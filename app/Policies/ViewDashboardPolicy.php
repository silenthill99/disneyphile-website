<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ViewDashboardPolicy
{
    use HandlesAuthorization;

    public function view(User $user, User $model): bool
    {
        return $user->is($model);
    }

    public function admin(User $user): bool
    {
        return $user->role->name === 'Admin';
    }

}
