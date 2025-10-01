<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Configure storage paths for Vercel serverless environment
        if (isset($_ENV['VERCEL']) && $_ENV['VERCEL'] === '1') {
            $this->configureVercelStorage();
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Configure storage paths for Vercel's read-only filesystem.
     */
    protected function configureVercelStorage(): void
    {
        // Create necessary directories in /tmp
        $directories = [
            '/tmp/storage/framework/cache',
            '/tmp/storage/framework/sessions',
            '/tmp/storage/framework/views',
            '/tmp/storage/logs',
            '/tmp/bootstrap/cache',
        ];

        foreach ($directories as $directory) {
            if (!file_exists($directory)) {
                mkdir($directory, 0755, true);
            }
        }

        // Use app()->useStoragePath() and direct config repository access
        // to avoid service provider registration issues
        $this->app->useStoragePath('/tmp/storage');

        // Set paths directly in config repository before services boot
        $this->app['config']->set([
            'view.compiled' => '/tmp/storage/framework/views',
            'cache.stores.file.path' => '/tmp/storage/framework/cache',
            'session.files' => '/tmp/storage/framework/sessions',
            'logging.channels.single.path' => '/tmp/storage/logs/laravel.log',
            'logging.channels.daily.path' => '/tmp/storage/logs/laravel.log',
        ]);
    }
}
