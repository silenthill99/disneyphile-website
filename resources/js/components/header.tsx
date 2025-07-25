import React, { FormEvent } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLogoIcon from '@/components/app-logo-icon';
import { SharedData } from '@/types';

type LoginProps = {
    email: string;
    password: string;
}

const Header = () => {

    const {post: searchPost} = useForm()

    const {
        data: loginData,
        setData: setLoginData,
        post: postLoginData
    } = useForm<Required<LoginProps>>({
        email: "",
        password: ""
    })

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        searchPost(route('search'))
    }

    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postLoginData(route("login"), {
            onSuccess: () => {

            },
            onError: () => {
                window.location.href = route("login")
            }
        })
    }

    const {auth} = usePage<SharedData>().props;

    return (
        <header className={"shadow min-h-5 bg-blue-400 sticky top-0"}>
            <div className={"container mx-auto my-2 flex justify-between items-center"}>
                <Link href={route('home')}><AppLogoIcon className={"w-10 h-auto text-white"}/></Link>
                <form className={"space-x-2"} onSubmit={handleSubmit}>
                    <input type="search" name="" id="" placeholder={"Recherche"} className={"bg-white"}/>
                    <Button type={"submit"}>Valider</Button>
                </form>
                {auth.user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger className={"bg-white p-2 rounded"}>Menu</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className={"hover:underline"}>
                                <Link href={route('dashboard')}>Tableau de bord</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className={"hover:underline"}>
                                <Link href={route('members.show', auth.user.slug)}>Mon profil</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className={"hover:underline"}>
                                <Link href={route('logout')} method={"post"} className={"cursor-pointer"}>Se déconnecter</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <form onSubmit={handleLogin} className={"space-x-2"}>
                        <input
                            type={"email"}
                            value={loginData.email}
                            onChange={e => setLoginData("email", e.target.value)} className={"bg-white"}
                            placeholder={"Votre adresse mail"}
                        />
                        <input
                            type={"password"}
                            value={loginData.password}
                            onChange={e => setLoginData("password", e.target.value)}
                            placeholder={"Votre mot de passe"}
                            className={"bg-white"}
                        />
                        <input type={"submit"} value={"Se connecter"}/>
                    </form>
                )}
            </div>
        </header>
    );
};

export default Header;
