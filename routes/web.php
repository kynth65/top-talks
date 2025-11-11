<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
})->name('home');

Route::get('/start-teaching', function () {
    return Inertia::render('StartTeaching');
})->name('start-teaching');

Route::get('/student-services', function () {
    return Inertia::render('StudentServices');
})->name('student-services');

Route::get('/start-learning', function () {
    return Inertia::render('StartLearning');
})->name('start-learning');

Route::get('/teach-english', function () {
    return Inertia::render('TeachEnglish');
})->name('teach-english');

Route::get('/pricing', function () {
    return Inertia::render('ViewPricing');
})->name('pricing');

Route::get('/free-trial', function () {
    return Inertia::render('StartFreeTrial');
})->name('free-trial');

Route::post('/api/trial/submit', [App\Http\Controllers\TrialController::class, 'store'])->name('trial.submit');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
