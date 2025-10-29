import React, { FormEvent } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PaginatedProps, SharedData, User } from '@/types';
import { Button } from '@/components/ui/button';
import TagRow from '@/components/tag-row';
import tags from '@/routes/tags';
import { Tag } from '@/types/tags';
import PaginatedLinks from '@/components/paginated-links';

type TagsForm = {
    name: string;
}

const Tags = () => {
    const { data, setData, post, reset } = useForm<Required<TagsForm>>({
        name: ''
    });

    const {flash} = usePage<SharedData>().props;

    const { users, tags_all } = usePage<{
        users: PaginatedProps<User & {tags: Tag[]}>,
        tags_all: Tag[]
    }>().props;


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(tags.store().url, {
            onSuccess: () => reset()
        });
    };
    return (
        <AppLayout>
            <Head title={'Tags'} />
            {flash.success && (
                <p>{flash.success}</p>
            )}
            <div className={'p-5'}>
                <form onSubmit={handleSubmit}>
                    <Input
                        type={'text'}
                        placeholder={'Ajouter un tag'}
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    /> <br/>
                    <Button type={'submit'} value={'Ajouter un tag'} >Ajouter un tag</Button>
                </form>
            </div>
            <Separator />
            <div className={'p-5'}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nom de l'utilisateur</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead>Ajouter un tag</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.data.map((user) => (
                            <TagRow key={user.id} user={user} tags_all={tags_all}/>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className={"p-5"}>
                <PaginatedLinks props={users}/>
            </div>
        </AppLayout>
    );
};

export default Tags;
