import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link, router, usePage } from '@inertiajs/react';
import { User } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Group = {
    id: number,
    name: string,
    owner: User,
    description: string
}

type Props = {
    groups: {
        data: Group[],
        links: PaginationLink[]
        current_page: number;
        from: number | null;
        to: number | null;
        total: number;
        last_page: number;
    }
}

type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
}

const generatePaginationItems = (links: PaginationLink[], currentPage: number, lastPage: number) => {
    const items = [];
    const prevLink = links[0];
    const nextLink = links[links.length - 1];

    // Bouton Précédent
    if (prevLink && prevLink.label.includes('Previous')) {
        items.push({
            ...prevLink,
            label: '« Précédent',
            isPrevNext: true
        });
    }

    // Logique d'ellipses
    const delta = 2; // Nombre de pages à afficher de chaque côté de la page courante
    const left = currentPage - delta;
    const right = currentPage + delta + 1;

    for (let i = 1; i <= lastPage; i++) {
        if (i === 1 || i === lastPage || (i >= left && i < right)) {
            items.push({
                url: links.find(link => link.label === i.toString())?.url || null,
                label: i.toString(),
                active: i === currentPage,
                isPage: true
            });
        } else if (items[items.length - 1]?.label !== '...') {
            items.push({
                url: null,
                label: '...',
                active: false,
                isEllipsis: true
            });
        }
    }

    // Bouton Suivant
    if (nextLink && nextLink.label.includes('Next')) {
        items.push({
            ...nextLink,
            label: 'Suivant »',
            isPrevNext: true
        });
    }

    return items;
};

const Index = () => {
    const { groups } = usePage<Props>().props;

    if (groups.links.length <= 1) return null;
    return (
        <PageLayout className={'container mx-auto my-5 rounded-2xl bg-white/80 backdrop-blur-md p-3 overflow-y-auto'}>
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
                    {generatePaginationItems(groups.links, groups.current_page, groups.last_page).map((link, index) => (
                        <Button
                            key={index}
                            variant={"link"}
                            disabled={!link.url || link.active || link.isEllipsis}
                            onClick={() => link.url && router.visit(link.url)}
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
