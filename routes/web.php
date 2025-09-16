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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
