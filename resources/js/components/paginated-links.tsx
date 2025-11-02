import React from 'react';
import { PaginatedProps } from '@/types';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { decode } from 'html-entities';

type Props = {
    props: PaginatedProps<unknown>
}

const PaginatedLinks = ({props}: Props) => {
    return (
        <div className={"space-x-5"}>
            {props.links.map((link, id) => (
                <Button
                    variant={"link"}
                    key={id}
                    disabled={!link.url || link.active}
                    onClick={() => link.url && router.visit(link.url)}
                >{decode(link.label)}</Button>
            ))}
        </div>
    );
};

export default PaginatedLinks;
