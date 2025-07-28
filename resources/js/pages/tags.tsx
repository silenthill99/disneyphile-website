import React, { FormEvent, useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

const Tags = () => {
    const { data, setData, post, reset } = useForm<Required<TagsForm>>({
        name: ''
    });

    const [selectedTag, setSelectedTag] = useState<{[userSlug: string]: string}>({})

    const { flash, users, tags_all } = usePage<{
        flash: FlashProps,
        tags: Tags[],
        users: (User & {tags: Tags[]})[],
        tags_all: Tags[]
    }>().props;

    const handleTagChange = (userSlug: string, tagName: string) => {
        setSelectedTag((prev) => ({
            ...prev,
            [userSlug]: tagName,
        }));
    };

    const handleAttachTag = (userSlug: string) => {
        const tagName = selectedTag[userSlug];
        if (!tagName) return;

        const tag = tags_all.find(t => t.name === tagName);
        if (!tag) return;

        console.log(route('tags.attach', { user: userSlug, tag: tag.id }));

        router.post(route('tags.attach', {
            user: userSlug,
            tag: tag.id
        }));
    };


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
                        {users.map((user) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.tags.map((tag, index) => (
                                        <Badge variant={"secondary"} key={index}>{tag.name}</Badge>
                                    ))}</TableCell>
                                    <TableCell className={"flex"}>
                                        <Select
                                            value={selectedTag[user.slug] || ""}
                                            onValueChange={(value) => handleTagChange(user.slug, value)}
                                        >
                                            <SelectTrigger>
                                                {selectedTag[user.slug] || "Choisissez un tag"}
                                            </SelectTrigger>
                                            <SelectContent>
                                                {tags_all.map((tag) => (
                                                    <SelectItem key={tag.name} value={tag.name}>
                                                        {tag.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <button
                                            onClick={() => handleAttachTag(user.slug)}
                                            formMethod={"post"}
                                            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-700 transition"
                                        >
                                            Ajouter
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
};

export default Tags;
