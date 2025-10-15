import React, { HTMLAttributes } from 'react';
import { Link } from '@inertiajs/react';
import { rules } from '@/routes';

const InfosCGU = ({...props}: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p {...props}>
            En rejoignant notre communauté, vous acceptez nos <Link href={rules()} className={"underline text-blue-400 active:text-purple-600"}>Conditions Générales d'Utilisation</Link>
        </p>
    );
};

export default InfosCGU;
