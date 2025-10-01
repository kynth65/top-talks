# Vercel Deployment Guide

This project is configured for full-stack deployment on Vercel with Laravel backend and React frontend.

## Architecture

- **Backend**: Laravel 12 with PHP 8.2+ (via Vercel PHP runtime)
- **Frontend**: React 19 + TypeScript (built with Vite)
- **Routing**: All requests go through Laravel, Inertia.js handles SPA routing

## Deployment Setup

### 1. Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect the configuration from `vercel.json`

### 2. Configure Environment Variables

Add these environment variables in Vercel Dashboard → Project Settings → Environment Variables:

```env
# Application
APP_NAME="TopTalks"
APP_KEY=your-app-key-here
APP_URL=https://your-domain.vercel.app

# Database
DB_CONNECTION=mysql
DB_HOST=your-database-host
DB_PORT=3306
DB_DATABASE=your-database-name
DB_USERNAME=your-database-user
DB_PASSWORD=your-database-password

# Session & Cache (Vercel-optimized)
SESSION_DRIVER=cookie
CACHE_DRIVER=array
QUEUE_CONNECTION=sync

# Other settings
BROADCAST_DRIVER=log
FILESYSTEM_DISK=local
LOG_CHANNEL=stderr
```

**Important**: Generate `APP_KEY` locally with `php artisan key:generate --show` and add it to Vercel.

### 3. Deploy

Once environment variables are set:
1. Push code to your repository
2. Vercel will automatically build and deploy
3. Build process:
   - Installs npm dependencies
   - Runs `npm run build` to build frontend assets
   - Deploys Laravel backend with PHP serverless functions

## File Structure

```
├── api/
│   └── [...route].php        # Vercel PHP serverless function entry point
├── public/
│   ├── build/                # Vite build output (frontend assets)
│   └── index.php             # Laravel application entry point
├── resources/
│   ├── css/
│   └── js/                   # React frontend source
├── vercel.json               # Vercel configuration
└── .vercelignore             # Files to exclude from deployment
```

## Static Assets Caching

The configuration includes optimized caching:
- `/build/*` - Frontend assets (1 year cache, immutable)
- Static files (images, fonts, etc.) - 1 year cache, immutable
- Dynamic routes - Handled by Laravel (no cache)

## Troubleshooting

### Build Fails
- Check Vercel build logs for errors
- Ensure all environment variables are set
- Verify `APP_KEY` is properly generated

### 404 Errors
- Check that `api/[...route].php` exists and points to `public/index.php`
- Verify routing configuration in `vercel.json`

### Database Connection Issues
- Ensure database is accessible from Vercel's network
- Use connection pooling for better performance
- Consider using PlanetScale, Supabase, or other Vercel-compatible databases

### Static Assets Not Loading
- Check that build completed successfully
- Verify `public/build/manifest.json` exists
- Check browser console for asset path errors

## Local Development

For local development, use:

```bash
# Start full development environment
composer dev

# Or separately
php artisan serve
npm run dev
php artisan queue:listen
```

## Production Optimizations

The deployment is optimized for production:
- Frontend assets are pre-built and cached
- PHP opcache is enabled automatically
- Session/cache use cookie/array drivers (stateless)
- Static assets served with aggressive caching
- Serverless functions have 10-second timeout

## Limitations

- No persistent filesystem (use cloud storage for uploads)
- No long-running processes (use external queue services)
- 10-second function execution limit
- Cold starts may occur on serverless functions

## Recommended Services

- **Database**: PlanetScale, AWS RDS, DigitalOcean Managed DB
- **Storage**: AWS S3, Cloudinary, DigitalOcean Spaces
- **Queue**: AWS SQS, Redis Cloud, Upstash
- **Email**: SendGrid, Mailgun, AWS SES
