import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link } from '@inertiajs/react';
import { home } from '@/routes';

const Index = () => {
    return (
        <PageLayout className={"bg-white"}>
            <Link href={home()}>Page d'accueil</Link>
        </PageLayout>
    );
};

export default Index;
