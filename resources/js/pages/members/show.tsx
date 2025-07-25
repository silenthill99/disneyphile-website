import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { SharedData, User } from '@/types';
import { Badge } from '@/components/ui/badge';

type Tags = {
    id: number;
    name: string;
}

const Show = () => {
    const {auth, user, can, tags} = usePage<SharedData & {user: User, can: {view: boolean}, tags: Tags[]}>().props;

    console.log("can.view =", can.view);
    // console.log("user.id =", user.id);
    console.log("auth.user?.id =", auth.user?.id);

    return (
        <PageLayout className={"p-5 container mx-auto grid grid-cols-4 gap-5"}>
            <Head title={user.name}/>
            <div className={"bg-white flex flex-col items-center p-2 rounded-md"}>
                <h2 className={"text-3xl"}>{user.name}</h2>
                {can.view && (
                    <Link href={route("dashboard")}>Accéder à mon tableau de bord</Link>
                )}
                {tags.length === 0 ? (
                    <p>Aucun tags actuellement</p>
                ) : (
                    tags.map(tag => (
                        <Badge key={tag.id}>{tag.name}</Badge>
                    ))
                )}
            </div>
            <div className={"bg-white/90 rounded-md md:col-span-3 backdrop-blur-md"}>

            </div>
        </PageLayout>
    );
};

export default Show;
