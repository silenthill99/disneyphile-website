import React from 'react';

const NavLink = ({...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props}>
            <p>Essai</p>
        </div>
    );
};

export default NavLink;
