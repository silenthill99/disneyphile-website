<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->validate([
            "email" => "required|email",
            "password" => "required",
        ]);

        $remember = $request->boolean('remember');

        \Log::debug('Remember value from request:', [
            'remember' => $remember,
            'raw_remember' => $request->input('remember'),
            'all_request' => $request->all()
        ]);

        if (Auth::attempt($credentials, $remember)) {
            $request->session()->regenerate();

            \Log::debug('After login - User remember_token:', [
                'token' => Auth::user()->remember_token
            ]);

            return redirect()->intended(route('home', absolute: false));
        }
//        $request->authenticate();
        \Log::debug('flash loginError will be set');

        return to_route('login')->with('loginError', 'Ces identifiants sont invalides');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
