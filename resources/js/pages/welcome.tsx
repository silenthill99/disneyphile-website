import { Head } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';
export default function Welcome() {
    return (
        <PageLayout className="grid grid-cols-4 gap-5 h-full container mx-auto p-5">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* Panneau gauche (immobile, dans le flux) */}
            <div className="bg-white rounded-2xl h-full">
                {/* contenu */}
            </div>

            {/* Centre (le seul scrollable) */}
            <div className="col-span-2 bg-white rounded-2xl h-full overflow-y-auto p-4 opacity-75">

            </div>

            {/* Panneau droit (immobile, dans le flux) */}
            <div className="bg-white rounded-2xl h-full overflow-hidden">
                {/* contenu */}
            </div>
        </PageLayout>
    );
}
