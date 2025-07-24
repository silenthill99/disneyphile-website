import { Head } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';

export default function Dashboard() {
    return (
        <PageLayout className={"container mx-auto md:grid md:grid-cols-4 p-5 h-2000"}>
            <Head title="Dashboard" />
            <div className={"bg-white rounded-2xl"}>

            </div>
        </PageLayout>
    );
}
