<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class TrialController extends Controller
{
    /**
     * Handle trial signup form submission.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'student_age' => 'required|string',
            'plan' => 'required|string|in:basic,standard,premium',
            'learning_goals' => 'nullable|string|max:1000',
            'preferred_schedule' => 'nullable|string',
            'experience_level' => 'required|string|in:beginner,intermediate,advanced',
        ]);

        // Log the trial signup for now
        Log::info('New trial signup', [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'plan' => $validated['plan'],
            'student_age' => $validated['student_age'],
            'experience_level' => $validated['experience_level'],
        ]);

        // TODO: Store in database or send notification email
        // You can uncomment the following to send email notifications:
        // Mail::to(config('mail.from.address'))->send(new TrialSignupMail($validated));

        return response()->json([
            'success' => true,
            'message' => 'Trial signup submitted successfully! We will contact you within 24 hours.',
        ], 200);
    }
}
