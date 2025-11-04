import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { Groups } from '@/types/groups';
import groups from '@/routes/groups';
import AppLayout from '@/layouts/app-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { EditIcon, TrashIcon } from 'lucide-react';

type Props = {
    groupList: Groups[]
}

const MyGroups = () => {
    const { groupList } = usePage<Props>().props;

    return (
        <AppLayout>
            <h1>Mes groupes créés</h1>
            {groupList.length <= 0 ? (
                <p>Vous avez aucun groupes actuellement</p>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nom du groupe</TableHead>
                            <TableHead>Modifier le groupe</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {groupList.map((group) => (
                            <TableRow key={group.id}>
                                <TableCell>
                                    <Link href={groups.show({group: group.slug})}>
                                        {group.name}
                                    </Link>
                                </TableCell>
                                <TableCell className={"space-x-2"}>
                                    <Button
                                        onClick={() => router.visit(groups.edit({group: group.slug}))}
                                    >
                                        <EditIcon />
                                    </Button>
                                    <Button
                                        variant={"destructive"}
                                        onClick={() => router.post(groups.destroy({group: group.slug}))}
                                    >
                                        <TrashIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </AppLayout>
    );
};

export default MyGroups;
