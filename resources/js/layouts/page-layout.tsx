import React, { PropsWithChildren } from 'react';
import Header from '@/components/header';

type Props = PropsWithChildren<{
    className?: string;
}>

const PageLayout = ({children, className}: Props) => {
    return (
        <div className={"h-screen flex flex-col bg-[url('assets/images/background.jpg')] bg-cover"}>
            <Header />
            <main className={`flex-1 overflow-hidden ${className}`}>
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
