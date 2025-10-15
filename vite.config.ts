import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import flowbiteReact from "flowbite-react/plugin/vite";
import { wayfinder } from '@laravel/vite-plugin-wayfinder';

export default defineConfig({
    plugins: [laravel({
        input: ['resources/css/app.css', 'resources/js/app.tsx'],
        ssr: 'resources/js/ssr.tsx',
        refresh: true,
    }), react(), tailwindcss(), flowbiteReact(), wayfinder({
        formVariants: true
    })],
    esbuild: {
        jsx: 'automatic',
    },
});
