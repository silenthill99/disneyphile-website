import React, { PropsWithChildren } from 'react';
import Header from '@/components/header';

type Props = PropsWithChildren<{
    className?: string;
}>

const PageLayout = ({children, className}: Props) => {
    return (
        <div className={"md:h-screen overflow-hidden flex flex-col bg-[url('/assets/images/background.jpg')] bg-cover bg-fixed"}>
            <Header />
            <main className={`flex-1 min-h-0 ${className}`}>
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
