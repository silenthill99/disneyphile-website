import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SharedData } from '@/types';
import { Form, Link, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';
import Mailbox from '@/components/mailbox';
import { dashboard, home, login, logout } from '@/routes';
import members from '@/routes/members';
import groups from '@/routes/groups';

type LoginProps = {
    email: string;
    password: string;
};

const Header = () => {

    const {
        data: loginData,
        setData: setLoginData,
        post: postLoginData,
    } = useForm<Required<LoginProps>>({
        email: '',
        password: '',
    });

    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postLoginData(login().url, {
            onSuccess: () => {},
            onError: () => {
                window.location.href = login().url;
            },
        });
    }

    const { auth } = usePage<SharedData>().props;

    return (
        <header className={'sticky top-0 z-50 min-h-5 bg-blue-400 shadow'}>
            <div className={'container mx-auto py-2 px-5 md:px-0 flex items-center justify-between'}>
                <Link href={home()}>
                    <AppLogoIcon className={'h-auto w-10 text-white'} />
                </Link>
                <Form className={'space-x-2 hidden md:block'}>
                    <input type="search" name="" id="" placeholder={'Recherche'} className={'bg-white'} />
                    <Button type={'submit'}>Valider</Button>
                </Form>
                {auth.user ? (
                    <div className={"flex gap-2"}>
                        <nav className={"hidden md:block text-white"}>
                            <ul className={"flex gap-2"}>
                                <li>
                                    <Link href={dashboard()} className={"underline decoration-transparent hover:decoration-white duration-200"}>Tableau de bord</Link>
                                </li>
                                <li>
                                    <Link href={members.show({slug: auth.user.slug})} className={"underline decoration-transparent hover:decoration-white duration-200"}>Profil</Link>
                                </li>
                                <li>
                                    <Link href={logout()} className={"underline decoration-transparent hover:decoration-white duration-200 cursor-pointer"} method={"post"}>Se déconnecter</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={"md:hidden"}>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={'rounded bg-white p-1'}>Menu</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <Link href={groups.index()}>Liste des groupes</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className={'hover:underline'}>
                                        <Link href={dashboard()}>Tableau de bord</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className={'hover:underline'}>
                                        <Link href={members.show({slug: auth.user.slug})}>Mon profil</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={logout()} method={'post'} className={'cursor-pointer hover:underline text-red-500 hover:text-red-500'}>
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
