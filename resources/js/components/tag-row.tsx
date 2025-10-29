import React, { FormEvent } from 'react';
import { User } from '@/types';
import { router, useForm } from '@inertiajs/react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';
import { Button } from '@/components/ui/button';
import tags from '@/routes/tags';
import { ClosedCaptionIcon } from 'lucide-react';
import { Tag } from '@/types/tags';

type Props = {
    user: User & { tags: Tag[] };
    tags_all: Tag[];
};

const TagRow = ({user, tags_all}: Props) => {
    const { data, setData, post, reset } = useForm<{ tag: string }>({
        tag: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.tag) return;

        post(tags.attach({ user: user.slug, tag: parseInt(data.tag) }).url, {
            onSuccess: () => reset()
        });
    };
    const handleClick = (tag: Tag) => {
        if(confirm("Voulez-vous retirer ce tag ?")) {
            router.post(tags.detach({user: user.slug, tag: tag.id }).url)
        }
    }
    return (
        <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>
                {user.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                        {tag.name}
                        <button onClick={() => handleClick(tag)}><ClosedCaptionIcon/></button>
                    </Badge>
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
