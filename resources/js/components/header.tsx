import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className={"shadow min-h-5 bg-blue-400 sticky top-0"}>
            <div className={"container mx-auto my-2 flex justify-between items-center"}>
                <Link href={route('home')}><img src={"assets/images/logo.svg"} alt={"Logo"} width={50}/></Link>
                <form className={"space-x-2"}>
                    <input type="search" name="" id="" placeholder={"Recherche"} className={"bg-white"}/>
                    <Button type={"submit"}>Valider</Button>
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger className={"bg-white p-2 rounded"}>Menu</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className={"hover:underline"}>
                            <Link href={route('dashboard')}>Tableau de bord</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className={"hover:underline"}>
                            <Link href={route('logout')} method={"post"} className={"cursor-pointer"}>Se déconnecter</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Header;
