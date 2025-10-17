import React, { PropsWithChildren } from 'react';
import Header from '@/components/header';
import { cn } from '@/lib/utils';

type Props = PropsWithChildren<{
    className?: string;
    parentClassName?: string
}>

const PageLayout = ({children, className, parentClassName}: Props) => {
    return (
        <div className={cn("min-h-screen flex flex-col bg-[url('/assets/images/background.jpg')] bg-cover bg-fixed", parentClassName)}>
            <Header />
            <main className={`flex-1 min-h-0 ${className}`}>
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
