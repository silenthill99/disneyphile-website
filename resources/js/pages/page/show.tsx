import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link, usePage } from '@inertiajs/react';
import { Page } from '@/types';
import { home } from '@/routes';
import { ArrowLeftIcon } from 'lucide-react';

const Show = () => {
    const {page} = usePage<{page: Page}>().props;
    return (
        <PageLayout className={"bg-white"}>
            <div className={"container mx-auto"}>
                <Link href={home()} className={"flex items-center gap-2 hover:underline"}><ArrowLeftIcon/> Page d'accueil</Link>
                <h1>{page.title}</h1>
            </div>
        </PageLayout>
    );
};

export default Show;
