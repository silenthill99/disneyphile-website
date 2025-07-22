import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <PageLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
        </PageLayout>
    );
}
