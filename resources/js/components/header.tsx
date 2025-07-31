import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SharedData } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';
import Mailbox from '@/components/mailbox';

type LoginProps = {
    email: string;
    password: string;
};

const Header = () => {
    const { post: searchPost } = useForm();

    const {
        data: loginData,
        setData: setLoginData,
        post: postLoginData,
    } = useForm<Required<LoginProps>>({
        email: '',
        password: '',
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        searchPost(route('search'));
    }

    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postLoginData(route('login'), {
            onSuccess: () => {},
            onError: () => {
                window.location.href = route('login');
            },
        });
    }

    const { auth } = usePage<SharedData>().props;

    return (
        <header className={'sticky top-0 z-50 min-h-5 bg-blue-400 shadow'}>
            <div className={'container mx-auto py-2 px-5 md:px-0 flex items-center justify-between'}>
                <Link href={route('home')}>
                    <AppLogoIcon className={'h-auto w-10 text-white'} />
                </Link>
                <form className={'space-x-2 hidden md:block'} onSubmit={handleSubmit}>
                    <input type="search" name="" id="" placeholder={'Recherche'} className={'bg-white'} />
                    <Button type={'submit'}>Valider</Button>
                </form>
                {auth.user ? (
                    <div className={"flex gap-2"}>
                        <nav className={"hidden md:block text-white"}>
                            <ul className={"flex gap-2"}>
                                <li>
                                    <Link href={route("dashboard")} className={"underline decoration-transparent hover:decoration-white duration-200"}>Tableau de bord</Link>
                                </li>
                                <li>
                                    <Link href={route("members.show", auth.user.slug)} className={"underline decoration-transparent hover:decoration-white duration-200"}>Profil</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={"md:hidden"}>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={'rounded bg-white p-1'}>Menu</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild className={'hover:underline'}>
                                        <Link href={route('dashboard')}>Tableau de bord</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className={'hover:underline'}>
                                        <Link href={route('members.show', auth.user.slug)}>Mon profil</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className={'hover:underline'}>
                                        <Link href={route('logout')} method={'post'} className={'cursor-pointer'}>
                                            Se déconnecter
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Mailbox className={"w-5 text-white hidden md:block"}/>
                    </div>
                ) : (
                    <form onSubmit={handleLogin} className={'space-x-2'}>
                        <input
                            type={'email'}
                            value={loginData.email}
                            onChange={(e) => setLoginData('email', e.target.value)}
                            className={'bg-white'}
                            placeholder={'Votre adresse mail'}
                        />
                        <input
                            type={'password'}
                            value={loginData.password}
                            onChange={(e) => setLoginData('password', e.target.value)}
                            placeholder={'Votre mot de passe'}
                            className={'bg-white'}
                        />
                        <input type={'submit'} value={'Se connecter'} />
                    </form>
                )}
            </div>
        </header>
    );
};

export default Header;
