import React, { useState } from 'react';
import { User } from '@/types';
import { router } from '@inertiajs/react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from '@/components/ui/button';
import tags from '@/routes/tags';
import { ClosedCaptionIcon } from 'lucide-react';
import { Tag } from '@/types/tags';

type Props = {
    user: User & { tags: Tag[] };
    tags_all: Tag[];
};

const TagRow = ({user, tags_all}: Props) => {
    const [selectedTag, setSelectedTag] = useState<string>('');

    const handleClick = (tag: Tag) => {
        if(confirm("Voulez-vous retirer ce tag ?")) {
            router.post(tags.detach({user: user.slug, tag: tag.id }).url)
        }
    }

    const handleTagSubmit = () => {
        if (!selectedTag) return;

        router.post(tags.attach({user: user.slug, tag: parseInt(selectedTag)}).url, {}, {
            onSuccess: () => setSelectedTag('')
        })
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
                <div className="flex">
                    <Select
                        value={selectedTag}
                        onValueChange={setSelectedTag}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={"Choisissez un tag"}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {tags_all.map((tag) => (
                                    <SelectItem key={tag.id} value={tag.id.toString()}>
                                        {tag.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button onClick={handleTagSubmit} className="ml-2">Ajouter</Button>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TagRow;
