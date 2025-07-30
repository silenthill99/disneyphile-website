import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Link, router, usePage } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User } from '@/types';

type Group = {
    id: number,
    name: string,
    owner: User
}

type Props = {
    groups: {
        data: Group[],
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[]
    }
}

const Index = () => {
    const {groups} = usePage<Props>().props;
    return (
        <PageLayout className={"container mx-auto bg-white/90 backdrop-blur-md p-10"}>
            <h1>Liste des groupes</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nom du groupe</TableHead>
                        <TableHead>Créateur</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {groups.data.map(group => (
                        <TableRow key={group.id}>
                            <TableCell>{group.name}</TableCell>
                            <TableCell>
                                <Link href={route("members.show", group.owner.slug)}>{group.owner.name}</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex flex-wrap gap-1 mt-4">
                {groups.links.map((link, index) => (
                    <button
                        key={index}
                        disabled={!link.url}
                        onClick={() => link.url && router.visit(link.url)}
                        className={`px-2 py-1 rounded border ${link.active ? 'font-bold bg-blue-200' : 'bg-white'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </PageLayout>
    );
};

export default Index;
