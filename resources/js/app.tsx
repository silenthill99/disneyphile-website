import '../css/app.css';

import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : `${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob<ResolvedComponent>('./pages/**/*.tsx');
        return pages[`./pages/${name}.tsx`]();
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#ff0000',
    },
});

// This will set light / dark mode on load...
initializeTheme();
