<?php

	namespace App\Policies;

	use App\Models\User;
    use Carbon\Carbon;
    use Carbon\Exceptions\InvalidFormatException;
    use Illuminate\Auth\Access\HandlesAuthorization;

	class UserPolicy
	{
		use HandlesAuthorization;

        /**
         * @throws InvalidFormatException
         */
        public function age(User $user): bool
		{
			return Carbon::parse($user->birth_date)->lte(Carbon::now()->subYears(13));
		}

        public function view(User $user, User $model): bool
        {
            return $user->is($model);
        }

        public function admin(User $user): bool
        {
            return $user->role->name === 'Admin';
        }
	}
