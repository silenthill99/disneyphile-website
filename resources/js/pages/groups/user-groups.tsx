import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link, usePage } from '@inertiajs/react';
import { PaginatedProps, User } from '@/types';
import { Separator } from '@/components/ui/separator';
import { show } from '@/routes/members';
import { Groups } from '@/types/groups';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import PaginatedLinks from '@/components/paginated-links';

const UserGroups = () => {
    const {user} = usePage<{user: User}>().props
    const {createdGroups} = usePage<{createdGroups: PaginatedProps<Groups>}>().props

    return (
        <PageLayout className={"bg-white container mx-auto my-5 rounded-lg shadow-sm"}>
            <h1>Groupes de {user.name}</h1>
            <Separator/>
            <Link href={show({user: user})}>Retour</Link>
            <h2>Groupes créés</h2>
            {createdGroups.data.length == 0 ? (
                <p>Aucun groupes créés actuellement</p>
            ) : (
                <div className={"grid grid-cols-3 gap-5"}>
                    {createdGroups.data.map((group) => (
                        <Card key={group.id}>
                            <CardHeader>
                                <CardTitle>{group.name}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                    <PaginatedLinks props={createdGroups}/>
                </div>
            )}
        </PageLayout>
    );
};

export default UserGroups;
