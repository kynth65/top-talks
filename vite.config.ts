import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    const plugins = [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ];

    // Only add wayfinder in development (when PHP is available)
    if (mode === 'development') {
        plugins.push(wayfinder({
            formVariants: true,
        }));
    }

    return {
        plugins,
        esbuild: {
            jsx: 'automatic',
        },
    };
});
