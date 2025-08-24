import { Head, Link, usePage } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';
import { SharedData, User } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DOMPurify from 'dompurify';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Create from '@/components/articles/create';
import { useInitials } from '@/hooks/use-initials';
import RightArrow from '@/components/right-arrow';

type Group = {
    user: User,
    name: string,
    description: string,
    bannier?: string | null,
    private: boolean
}

type Post = {
    id: number,
    user: User,
    group?: Group | null,
    content: string,
    image_path?: string | null,
    visibility: boolean,
    created_at: string
}

export default function Welcome() {
    const {auth, posts} = usePage<SharedData & {posts: Post[]}>().props;

    const text = "Attention à tiktok : https://www.youtube.com/watch?v=jrJ5CNeoTXU"
    const rejex = /https?:\/\/\S+/g;
    const linkedText = text.replace(rejex, (url) => {
        return `<a href="${url}" class="text-blue-500">${url}</a>`
    })
    DOMPurify.sanitize(linkedText);

    const getInitials = useInitials();
    return (
        <PageLayout className="container mx-auto grid h-full gap-5 p-5 md:px-0 lg:grid-cols-5">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* Panneau gauche (immobile, dans le flux) */}
            <div className="hidden h-full overflow-hidden items-center gap-5 rounded-2xl bg-white p-5 text-center md:flex-col lg:flex">
                <Avatar>
                    <AvatarImage src={auth.user.image_profile ? `/storage/${auth.user.image_profile}` : '/assets/immages/logo.svg'} className={auth.user.image_profile ? 'object-cover' : 'bg-gray-200'} />
                    <AvatarFallback>{getInitials(auth.user.name)}</AvatarFallback>
                </Avatar>
                <h2 className={'text-2xl'}>{auth.user.name}</h2>
                <nav>
                    <ul className={'space-y-2'}>
                        <li>
                            <Link href={route('members.index')} className={'hover:underline'}>
                                Liste des membres
                            </Link>
                        </li>
                        <li>
                            <Link href={route('groups')} className={'hover:underline'}>
                                Liste des groupes
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Centre (le seul scrollable) */}
            <div className="overflow-y-auto col-span-3 h-full rounded-2xl bg-white/80 p-4 backdrop-blur-md">
                <Dialog>
                    <DialogTrigger className={'inline-block w-full cursor-pointer rounded-full bg-white p-2 text-left'}>
                        Créer un nouvel article
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Créer un nouvel article</DialogTitle>
                            <Create />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <div className={'my-20 space-y-5'}>
                    {posts.map((p) => (
                        <div key={p.id}>
                            <div className={'rounded bg-white p-5 space-y-5'}>
                                <div className={"flex items-center justify-between"}>
                                    <div className={'flex items-center gap-5'}>
                                        <Link href={route('members.show', p.user.slug)}
                                              className={'flex items-center gap-5'}>
                                            <Avatar>
                                                <AvatarImage src={'/storage/' + p.user.image_profile}
                                                             className={'object-cover'} />
                                                <AvatarFallback>{getInitials(p.user.name)}</AvatarFallback>
                                            </Avatar>
                                            <span>{p.user.name}</span>
                                        </Link>
                                        {p.group && (
                                            <>
                                                <RightArrow className={'w-5 h-5'} />
                                                <Link href={route('groups.create')}>{p.group.name}</Link>
                                            </>
                                        )}
                                    </div>
                                    <p className={"text-gray-400"}>Le {new Date().toLocaleDateString(navigator.language, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</p></div>
                                <p>{p.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Panneau droit (immobile, dans le flux) */}
            <div className="hidden h-full overflow-hidden rounded-2xl bg-white p-5 lg:block">
                <h2 className={'py-5 text-center text-3xl'}>Suggestions</h2>
                <div className={'flex items-center gap-2 border p-1'}>
                    <Avatar>
                        <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <p className={'text-sm'}>Disneyland Paris - Compte officiel</p>
                    {/*<button className={"text-sm cursor-pointer active:bg-gray-300"}>S'abonner</button>*/}
                </div>
            </div>
        </PageLayout>
    );
}
