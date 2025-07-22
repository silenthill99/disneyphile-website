import React, { PropsWithChildren } from 'react';
import Header from '@/components/header';

const PageLayout = ({children}: PropsWithChildren) => {
    return (
        <div className={"min-h-screen flex flex-col"}>
            <Header />
            {children}
        </div>
    );
};

export default PageLayout;
