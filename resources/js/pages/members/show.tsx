import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { SharedData, User } from '@/types';

const Show = () => {
    const {auth, user} = usePage<SharedData & {user: User}>().props;
    return (
        <PageLayout className={"p-5 container mx-auto grid grid-cols-4 gap-5"}>
            <Head title={user.name}/>
            <div className={"bg-white flex flex-col items-center p-2 rounded-md"}>
                <h2 className={"text-3xl"}>{user.name}</h2>
                {auth.user?.id === user?.id && (
                    <Link href={route("dashboard")}>Accéder à mon tableau de bord</Link>
                )}
            </div>
        </PageLayout>
    );
};

export default Show;
