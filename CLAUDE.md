# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Laravel + React + Inertia.js application called "TopTalks" using:
- **Backend**: Laravel 12 with PHP 8.2+
- **Frontend**: React 19 with TypeScript
- **Routing**: Inertia.js for SPA-like experience
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with custom components
- **Build Tool**: Vite with Laravel plugin
- **Testing**: Pest (PHP)
- **Code Quality**: ESLint, Prettier, Laravel Pint

## Development Commands

### Frontend Development
```bash
# Development server (Laravel + Vite + Queue)
composer dev

# Frontend only development
npm run dev

# Build for production
npm run build

# Build with SSR
npm run build:ssr

# SSR development mode
composer dev:ssr
```

### Code Quality
```bash
# Lint and fix JavaScript/TypeScript
npm run lint

# Check TypeScript types
npm run types

# Format code with Prettier
npm run format

# Check formatting
npm run format:check

# PHP code styling (Laravel Pint)
./vendor/bin/pint
```

### Testing
```bash
# Run PHP tests
composer test
# or
php artisan test

# Clear config cache before testing
php artisan config:clear
```

### Laravel Commands
```bash
# Start development server
php artisan serve

# Run queue worker
php artisan queue:listen --tries=1

# View logs
php artisan pail --timeout=0

# Start SSR server
php artisan inertia:start-ssr
```

## Architecture

### Frontend Structure
- **Entry Point**: `resources/js/app.tsx` - Inertia.js setup with React
- **Pages**: `resources/js/pages/` - Inertia page components (Landing.tsx, dashboard.tsx, etc.)
- **Components**: `resources/js/components/` - Reusable React components
- **Layouts**: `resources/js/layouts/` - Page layout components
- **Hooks**: `resources/js/hooks/` - Custom React hooks (theme, etc.)
- **Types**: `resources/js/types/` - TypeScript type definitions
- **Routing**: `resources/js/routes/` - Frontend route definitions
- **Actions**: `resources/js/actions/` - Frontend actions/API calls
- **Translations**: `resources/js/translations/` - i18n translation files
- **Wayfinder**: `resources/js/wayfinder/` - Laravel Wayfinder integration

### Backend Structure
- **Routes**: `routes/web.php` (main), `routes/auth.php`, `routes/settings.php`
- **Controllers**: `app/Http/Controllers/`
- **Models**: `app/Models/`
- **Middleware**: Standard Laravel middleware

### Key Features
- **Authentication**: Laravel Breeze-style auth with Inertia
- **Theme System**: Light/dark mode with `initializeTheme()` in app.tsx
- **Internationalization**: i18next setup in `resources/js/i18n.ts`
- **SSR Ready**: Configured for server-side rendering with `resources/js/ssr.tsx`

### TypeScript Configuration
- **Path Mapping**: `@/*` maps to `./resources/js/*`
- **JSX**: React JSX automatic runtime
- **Target**: ESNext with bundler module resolution
- **Strict Mode**: Enabled with comprehensive type checking

### Styling
- **Tailwind CSS v4**: Latest version with Vite plugin
- **Components**: Located in `resources/js/components/` using Radix UI primitives
- **Animations**: tailwindcss-animate for motion
- **Utility Libraries**: clsx, tailwind-merge, class-variance-authority

## Development Notes

- Use `composer dev` to start the full development environment (Laravel server + queue + Vite)
- Frontend components follow React 19 patterns with automatic JSX runtime
- The app uses Inertia.js routing - page components in `resources/js/pages/` are automatically resolved
- Theme switching is handled by custom hooks in `resources/js/hooks/use-appearance`
- All TypeScript files should use the `@/*` path alias for imports from `resources/js/`