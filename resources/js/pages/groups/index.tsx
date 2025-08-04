import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link, router, usePage } from '@inertiajs/react';
import { User } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Group = {
    id: number,
    name: string,
    owner: User,
    description: string
}

type Props = {
    groups: {
        data: Group[],
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[]
        current_page: number;
        from: number | null;
        to: number | null;
        total: number;
    }
}

const Index = () => {
    const { groups } = usePage<Props>().props;

    if (groups.links.length <= 1) return null;
    return (
        <PageLayout className={'container mx-auto my-5 rounded-2xl bg-white/80 backdrop-blur-md p-3'}>
            <h1>Liste des groupes</h1>
            <Link href={route("groups.create")} className={"text-blue-500 hover:text-purple-500 hover:underline"}>Créer un groupe</Link><br/><br/>
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-5'}>
                {groups.data.map(group => (
                    <Card className={"overflow-hidden"} key={group.id}>
                        <CardHeader>
                            <img src={"/assets/images/background.jpg"} alt={"Bannière"}/>
                            <CardTitle>{group.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className={'line-clamp-3 whitespace-pre-line'}>{group.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className={'flex items-center justify-between'}>
                <p>Affichage des résultats <span className={'font-semibold'}>{groups.from}</span> à <span
                    className={'font-semibold'}>{groups.to}</span> sur {groups.total}</p>
                <div className="flex flex-wrap gap-1">
                    {groups.links.map((link, index) => (
                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.visit(link.url)}
                            className={`rounded border px-2 py-1 ${link.active ? 'bg-blue-200 font-bold' : 'bg-white'}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>

            {/*<nav className={'mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between'} aria-label={'Pagination Navigation'}>*/}
            {/*    <div className="mb-4 text-sm text-gray-700 sm:mb-0 dark:text-gray-400">*/}
            {/*        {groups.from !== null && groups.to !== null ? (*/}
            {/*            <>*/}
            {/*                Affichage de <span className="font-medium">{groups.from}</span> à <span className="font-medium">{groups.to}</span> sur{' '}*/}
            {/*                <span className="font-medium">{groups.total}</span> résultats*/}
            {/*            </>*/}
            {/*        ) : (*/}
            {/*            `${groups.total} résultats`*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </PageLayout>
    );
};

export default Index;
