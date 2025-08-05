import React, { FormEvent } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User } from '@/types';
import { Button } from '@/components/ui/button';
import TagRow from '@/components/tag-row';

type Tags = {
    id: number;
    name: string;
}

type TagsForm = {
    name: string;
}

type FlashProps = {
    success?: string
}

type PaginatedUsers<T> = {
    data: T[],
    links: {
        url: string | null,
        label: string,
        active: boolean
    }[]
}
const Tags = () => {
    const { data, setData, post, reset } = useForm<Required<TagsForm>>({
        name: ''
    });

    const { flash, users, tags_all } = usePage<{
        flash: FlashProps,
        users: PaginatedUsers<User & {tags: Tags[]}>,
        tags_all: Tags[]
    }>().props;


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('tags.store'), {
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
            <div className={"space-x-5"}>
                {users.links.map((link, index) => (
                    <button
                        key={index}
                        disabled={!link.url}
                        onClick={() => link.url && router.visit(link.url)}
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className={`border px-2 py-1 rounded ${link.active && "font-bold"} ${link.url && "cursor-pointer"}`}
                    />
                ))}
            </div>
        </AppLayout>
    );
};

export default Tags;
