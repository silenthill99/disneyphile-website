import React, { FormEvent, useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

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
    const { data, setData, post } = useForm<Required<TagsForm>>({
        name: ''
    });

    const [selectedTag, setSelectedTag] = useState<{[userId: number]: string}>({})

    const { flash, users, tags_all } = usePage<{
        flash: FlashProps,
        tags: Tags[],
        users: (User & {tags: Tags[]})[],
        tags_all: Tags[]
    }>().props;

    const handleTagChange = (userId: number, tagName: string) => {
        setSelectedTag((prev) => ({
            ...prev,
            [userId]: tagName,
        }));
    };

    const handleAttachTag = (userId: number) => {
        const tagName = selectedTag[userId];
        if (!tagName) return;

        const tag = tags_all.find(t => t.name === tagName);

        if (!tag) return;

        router.post(route('tags.attach', {
            user: userId,
            tag: tag.id,
        }));
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('tags.store'));
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
                    />
                    <input type={'submit'} value={'Ajouter un tag'} />
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
                                        <span key={index}>{tag.name}</span>
                                    ))}</TableCell>
                                    <TableCell>
                                        <Select
                                            value={selectedTag[user.id] || ""}
                                            onValueChange={(value) => handleTagChange(user.id, value)}
                                        >
                                            <SelectTrigger>
                                                {selectedTag[user.id] || "Choisissez un tag"}
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
                                            onClick={() => handleAttachTag(user.id)}
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
