import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link, usePage } from '@inertiajs/react';
import { PaginatedProps, SharedData } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Groups } from '@/types/groups';
import groups from '@/routes/groups';
import PaginatedLinks from '@/components/paginated-links';

type Props = {
    groupList: PaginatedProps<Groups>
}

const Index = () => {
    const { groupList, auth, flash } = usePage<Props & SharedData>().props;

    return (
        <PageLayout className={'container mx-auto my-5 rounded-2xl bg-white/80 backdrop-blur-md p-3 overflow-y-auto'}>
            <h1>Liste des groupes</h1>
            <Link href={groups.create()} className={"text-blue-500 hover:text-purple-500 hover:underline"}>Créer un groupe</Link><br/><br/>
            {flash.success && (
                <p className="text-green-700">{flash.success}</p>
            )}
            {groupList.data.length > 0 ? (
                <>
                    <div className={'grid grid-cols-2 md:grid-cols-3 gap-5'}>
                        {groupList.data.map(group => (
                            <Link href={groups.show({ slug: group.slug })} key={group.id}>
                                <Card className={'overflow-hidden h-full'}>
                                    <CardHeader>
                                        <img src={group.bannier ? group.bannier : '/assets/images/background.jpg'}
                                             alt={'Bannière'} />
                                        <CardTitle>{group.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className={'line-clamp-3 whitespace-pre-line'}>{group.description}</p>
                                        {(auth.user.role?.name === "Admin" || group.owner.id === auth.user.id) && (
                                            <div className={"flex justify-between"}>
                                                <Link href={groups.destroy(group.slug)}
                                                    className="text-red-500 hover:underline"
                                                    method={'delete'}>Supprimer</Link>
                                                <Link
                                                    href={groups.edit(group.slug)}
                                                    className={"hover:underline"}
                                                >
                                                    Modifier
                                                </Link>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    {groupList.links.length > 1 && (
                        <div className={'flex items-center justify-between mt-6'}>
                            <p>
                                {groupList.from !== null && groupList.to !== null ? (
                                    <>
                                        Affichage des résultats <span className={'font-semibold'}>{groupList.from}</span> à <span className={'font-semibold'}>{groupList.to}</span> sur {groupList.total}
                                    </>
                                ) : (
                                    `${groupList.total} résultats`
                                )}
                            </p>
                            <div className={"flex flex-wrap gap-1"}>
                                <PaginatedLinks props={groupList}/>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <p>Aucun groupes actuellement</p>
            )}
        </PageLayout>
    );
};

export default Index;
