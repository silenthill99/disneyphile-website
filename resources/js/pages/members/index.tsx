import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Head, usePage } from '@inertiajs/react';
import { User } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const Index = () => {
    const {users} = usePage<{users: User[]}>().props
    return (
        <PageLayout className={'container mx-auto my-20 rounded-2xl bg-white p-5'}>
            <Head title={'Membres'} />
            <h1>Liste des membres</h1>
            <Table className={"border"}>
                <TableHeader>
                    <TableHead>Nom</TableHead>
                    <TableHead>Actions</TableHead>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                       <TableRow key={user.id}>
                           <TableCell>{user.name}</TableCell>
                           <TableCell><span>Voir le profil</span></TableCell>
                       </TableRow>
                    ))}
                </TableBody>
            </Table>
        </PageLayout>
    );
};

export default Index;
