import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => {
            const pages = import.meta.glob<ResolvedComponent>('./pages/**/*.tsx');
            return pages[`./pages/${name}.tsx`]();
        },
        setup: ({ App, props }) => {
            return <App {...props} />;
        },
    }),
);
