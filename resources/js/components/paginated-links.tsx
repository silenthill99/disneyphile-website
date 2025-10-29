import React from 'react';
import { PaginatedProps } from '@/types';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';

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
                    dangerouslySetInnerHTML={{__html: link.label}}
                />
            ))}
        </div>
    );
};

export default PaginatedLinks;
