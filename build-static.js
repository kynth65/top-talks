#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the manifest file
const manifestPath = join(__dirname, 'public/build/manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));

// Get the main app entry points
const appEntry = manifest['resources/js/app.tsx'];
const cssFile = appEntry.css[0];
const jsFile = appEntry.file;

console.log('Found assets:');
console.log('  CSS:', cssFile);
console.log('  JS:', jsFile);

// Create the index.html content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script>
            (function() {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            })();
        </script>

        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title>Top Talks - UI Preview</title>

        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='50' font-size='75' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='%23A0522D'%3ET%3C/text%3E%3C/svg%3E">
        <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='50' font-size='75' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='%23A0522D'%3ET%3C/text%3E%3C/svg%3E">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- Vite built assets -->
        <link rel="stylesheet" href="/build/${cssFile}">
        <script type="module" src="/build/${jsFile}"></script>
    </head>
    <body class="font-sans antialiased">
        <div id="app" data-page='{"component":"Landing","props":{},"url":"/","version":"1"}'></div>
    </body>
</html>
`;

// Write the index.html file
const indexPath = join(__dirname, 'public/index.html');
writeFileSync(indexPath, htmlContent, 'utf-8');

console.log('✓ Generated public/index.html with correct asset paths');
