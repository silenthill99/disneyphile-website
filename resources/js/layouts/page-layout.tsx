import React, { PropsWithChildren } from 'react';
import Header from '@/components/header';

type Props = PropsWithChildren<{
    className?: string;
}>

const PageLayout = ({children, className}: Props) => {
    return (
        <div className={"min-h-screen flex flex-col bg-[url('/assets/images/background.jpg')] bg-cover bg-fixed"}>
            <Header />
            <main className={`grow ${className}`}>
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
