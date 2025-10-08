import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { usePage } from '@inertiajs/react';
import { Groups } from '@/types/groups';

const Show = () => {
    const {group} = usePage<{group: Groups}>().props;
    return (
        <PageLayout className={"bg-white container mx-auto"}>
            <h1>{group.name}</h1>
        </PageLayout>
    );
};

export default Show;
