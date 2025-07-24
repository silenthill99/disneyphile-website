import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />
                <Link href={route('home')}>Page d'accueil</Link>
            </AppLayout>
        </>
    );
}
