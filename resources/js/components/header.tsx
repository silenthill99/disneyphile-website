import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { SharedData } from '@/types';

const Header = () => {

    const {auth} = usePage<SharedData>().props;

    return (
        <header className={"shadow py-10"}>
            <div className={'container mx-auto flex justify-between items-center p-2 md:p-0'}>
                <h1>Disneyphile</h1>
                {auth.user ? (
                    <Link href={route('dashboard')} className={"hidden lg:block"}>Profil</Link>
                ) : (
                    <div className={"hidden lg:flex"}>
                        <Link href={route('login')}>Se connecter</Link>
                        <Link href={route('register')} className={"ml-5"}>Créer un compte</Link>
                    </div>
                )}
                <button className={"lg:hidden"}>
                    <img src="/assets/images/burger.svg" alt="burger" className={"h-10"}/>
                </button>
            </div>
        </header>
    );
};

export default Header;
