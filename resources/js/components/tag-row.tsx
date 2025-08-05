import React, { FormEvent } from 'react';
import { User } from '@/types';
import { useForm } from '@inertiajs/react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';
import { Button } from '@/components/ui/button';

type Tags = {
    id: number;
    name: string;
};

type Props = {
    user: User & { tags: Tags[] };
    tags_all: Tags[];
};

const TagRow = ({user, tags_all}: Props) => {
    const { data, setData, post, reset } = useForm<{ tag: string }>({
        tag: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.tag) return;

        post(route('tags.attach', { user: user.slug, tag: data.tag }), {
            onSuccess: () => reset()
        });
    };
    return (
        <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>
                {user.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag.name}</Badge>
                ))}
            </TableCell>
            <TableCell>
                <form onSubmit={handleSubmit} className="flex">
                    <Select
                        value={data.tag}
                        onValueChange={(value) => setData('tag', value)}
                    >
                        <SelectTrigger>
                            {data.tag
                                ? tags_all.find(t => t.id.toString() === data.tag)?.name || "Choisissez un tag"
                                : "Choisissez un tag"}
                        </SelectTrigger>
                        <SelectContent>
                            {tags_all.map((tag) => (
                                <SelectItem key={tag.id} value={tag.id.toString()}>
                                    {tag.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button type="submit" className="ml-2">Ajouter</Button>
                </form>
            </TableCell>
        </TableRow>
    );
};

export default TagRow;
