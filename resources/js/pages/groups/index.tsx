import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link, router, usePage } from '@inertiajs/react';
import { PaginatedProps } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Groups } from '@/types/groups';
import groups from '@/routes/groups';

type Props = {
    groupList: PaginatedProps<Groups>
}


// const generatePaginationItems = (links: PaginatedProps<Groups>['links'], currentPage: number, lastPage: number) => {
//     const items = [];
//     const prevLink = links[0];
//     const nextLink = links[links.length - 1];
//
//     // Bouton Précédent
//     if (prevLink && prevLink.label.includes('Previous')) {
//         items.push({
//             ...prevLink,
//             label: '« Précédent',
//             isPrevNext: true
//         });
//     }
//
//     // Logique d'ellipses
//     const delta = 2; // Nombre de pages à afficher de chaque côté de la page courante
//     const left = currentPage - delta;
//     const right = currentPage + delta + 1;
//
//     for (let i = 1; i <= lastPage; i++) {
//         if (i === 1 || i === lastPage || (i >= left && i < right)) {
//             items.push({
//                 url: links.find(link => link.label === i.toString())?.url || null,
//                 label: i.toString(),
//                 active: i === currentPage,
//                 isPage: true
//             });
//         } else if (items[items.length - 1]?.label !== '...') {
//             items.push({
//                 url: null,
//                 label: '...',
//                 active: false,
//                 isEllipsis: true
//             });
//         }
//     }
//
//     // Bouton Suivant
//     if (nextLink && nextLink.label.includes('Next')) {
//         items.push({
//             ...nextLink,
//             label: 'Suivant »',
//             isPrevNext: true
//         });
//     }
//
//     return items;
// };

const Index = () => {
    const { groupList } = usePage<Props>().props;

    return (
        <PageLayout className={'container mx-auto my-5 rounded-2xl bg-white/80 backdrop-blur-md p-3 overflow-y-auto'}>
            <h1>Liste des groupes</h1>
            <Link href={groups.create()} className={"text-blue-500 hover:text-purple-500 hover:underline"}>Créer un groupe</Link><br/><br/>

            <div className={'grid grid-cols-2 md:grid-cols-3 gap-5'}>
                {groupList.data.map(group => (
                    <Link href={groups.show({slug: group.slug})} key={group.id}>
                        <Card className={"overflow-hidden"}>
                            <CardHeader>
                                <img src={group.bannier ? group.bannier : "/assets/images/background.jpg"} alt={"Bannière"}/>
                                <CardTitle>{group.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={'line-clamp-3 whitespace-pre-line'}>{group.description}</p>
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
                        {/*{generatePaginationItems(groupList.links, groupList.current_page, groupList.last_page).map((link, index) => (*/}
                        {/*    <Button*/}
                        {/*        key={index}*/}
                        {/*        variant="link"*/}
                        {/*        disabled={!link.url || link.active || link.isEllipsis}*/}
                        {/*        onClick={() => link.url && router.visit(link.url)}*/}
                        {/*    >*/}
                        {/*        {link.label}*/}
                        {/*    </Button>*/}
                        {/*))}*/}
                        {groupList.links.map((group, index) => (
                            <Button
                                key={index}
                                variant={"link"}
                                disabled={!group.url || group.active}
                                onClick={() => group.url && router.visit(group.url)}
                                dangerouslySetInnerHTML={{__html: group.label}}
                            />
                        ))}
                    </div>
                </div>
            )}
        </PageLayout>
    );
};

export default Index;
