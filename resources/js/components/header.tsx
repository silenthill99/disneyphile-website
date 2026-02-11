import AppLogoIcon from '@/components/app-logo-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SharedData } from '@/types';
import { Form, Link, usePage } from '@inertiajs/react';
import Mailbox from '@/components/mailbox';
import { dashboard, home, login, logout } from '@/routes';
import members from '@/routes/members';
import groups from '@/routes/groups';
import { Home, LayoutDashboard, LogOut, Search, User, Users } from 'lucide-react';
import React from 'react';

const NavLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Link
        href={href}
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
    >
        {icon}
        <span className="hidden xl:inline">{label}</span>
    </Link>
);

const Header = () => {
    const { auth } = usePage<SharedData>().props;

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 from-disney-blue-dark via-disney-blue to-disney-blue-light bg-linear-to-r shadow-lg backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-6">
                {/* Logo et nom */}
                <Link
                    href={home()}
                    className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
                >
                    <div className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg group-hover:shadow-disney-gold/20">
                        <AppLogoIcon className="h-8 w-8 text-white drop-shadow-md" />
                    </div>
                    <span className="hidden text-xl font-bold tracking-wide text-white drop-shadow-md md:block">
                        Disneyphile
                    </span>
                </Link>

                {/* Barre de recherche - Desktop */}
                <Form action={members.index().url} method="get" className="relative hidden max-w-md flex-1 md:flex">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-disney-blue-dark/60" />
                    <Input
                        type="search"
                        name="search"
                        placeholder="Rechercher des membres..."
                        className="h-10 w-full rounded-full border-white/20 bg-white/95 pl-10 pr-4 shadow-inner transition-all duration-200 placeholder:text-disney-blue-dark/50 focus:border-disney-gold focus:bg-white focus:ring-disney-gold/30"
                    />
                </Form>

                {auth.user ? (
                    <div className="flex items-center gap-2">
                        {/* Navigation Desktop avec icônes */}
                        <nav className="hidden items-center gap-1 lg:flex">
                            <NavLink href={home().url} icon={<Home className="h-4 w-4" />} label="Accueil" />
                            <NavLink href={dashboard().url} icon={<LayoutDashboard className="h-4 w-4" />} label="Tableau de bord" />
                            <NavLink href={members.show({ slug: auth.user.slug }).url} icon={<User className="h-4 w-4" />} label="Profil" />
                        </nav>

                        {/* Menu utilisateur Desktop */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="hidden h-9 gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-white backdrop-blur-sm transition-all duration-200 hover:border-disney-gold/50 hover:bg-white/20 hover:text-white lg:flex"
                                >
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-disney-gold text-xs font-bold text-disney-blue-dark">
                                        {auth.user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="max-w-24 truncate text-sm">{auth.user.name}</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 border-disney-blue/20 bg-white/95 backdrop-blur-md">
                                <div className="px-3 py-2">
                                    <p className="text-sm font-medium text-disney-blue-dark">{auth.user.name}</p>
                                    <p className="text-xs text-muted-foreground">{auth.user.email}</p>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={members.show({ slug: auth.user.slug })} className="flex cursor-pointer items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Mon profil
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={dashboard()} className="flex cursor-pointer items-center gap-2">
                                        <LayoutDashboard className="h-4 w-4" />
                                        Tableau de bord
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={groups.index()} className="flex cursor-pointer items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        Liste des groupes
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={logout()} method="post" className="flex cursor-pointer items-center gap-2 text-red-500 focus:text-red-500">
                                        <LogOut className="h-4 w-4" />
                                        Se déconnecter
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className={'md:hidden'}>
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
                                        <Link href={members.show({ slug: auth.user.slug })}>Mon profil</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href={logout()}
                                            method={'post'}
                                            className={'cursor-pointer text-red-500 hover:text-red-500 hover:underline'}
                                        >
                                            Se déconnecter
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Mailbox className={'hidden w-5 text-white md:block'} />
                    </div>
                ) : (
                    <Form
                        {...login.form}
                        onError={() => {
                            window.location.href = login().url;
                        }}
                        className={'space-x-2'}
                    >
                        <input type={'email'} name={'email'} className={'bg-white'} placeholder={'Votre adresse mail'} />
                        <input type={'password'} name={'password'} placeholder={'Votre mot de passe'} className={'bg-white'} />
                        <input type={'submit'} value={'Se connecter'} />
                    </Form>
                )}
            </div>
        </header>
    );
};

export default Header;
