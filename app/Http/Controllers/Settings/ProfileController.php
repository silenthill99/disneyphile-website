<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Show the user's profile settings page.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('settings/profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Update the user's profile settings.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        //        if ($request->hasFile('image')) {
        //            $image = $request->file('image');
        //            $filename = time() . '_' . $image->getClientOriginalName();
        //            $path = $image->storeAs('images', $filename, 'public');
        //            $data['image_profile'] = $path;
        //        }

        $request->user()->save();

        return to_route('profile.edit');
    }

    public function update_image(Request $request): RedirectResponse
    {
        $request->validate([
            'image' => 'required|image|max:8000',
        ]);

        $image = $request->file('image');
        $imageName = Str::uuid().'.'.$image->getClientOriginalExtension();
        $path = $image->storeAs('images', $imageName, 'public');

        $request->user()->update(['image_profile' => $path]);

        return to_route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
