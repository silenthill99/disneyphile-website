import { Head, Link, usePage } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';
import { Page, SharedData } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DOMPurify from 'dompurify';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Create from '@/components/articles/create';
import { useInitials } from '@/hooks/use-initials';
import RightArrow from '@/components/right-arrow';
import { Posts } from '@/types/posts';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import axios from 'axios';
import { like } from '@/routes';
import groups from '@/routes/groups';
import members from '@/routes/members';
import pages from '@/routes/pages';
import storage from '@/routes/storage';

export default function Welcome() {
    const {auth, posts, pageList} = usePage<SharedData & {posts: Posts[], pageList: Page[]}>().props;

    const [postData, setPostData] = useState(posts)

    const handleLike = async (postId: number) => {
        setPostData(prevPost =>
            prevPost.map(post =>
                post.id === postId
                    ? {...post, likes: post.likes + 1}
                    : post
            )
        );
        try {
            await axios.post(like({id: postId}).url)
        } catch (e) {
            setPostData(posts)
            console.error("Erreur : " +e)
        }
    }

    const text = "Attention à tiktok : https://www.youtube.com/watch?v=jrJ5CNeoTXU"
    const rejex = /https?:\/\/\S+/g;
    const linkedText = text.replace(rejex, (url) => {
        return `<a href="${url}" class="text-blue-500">${url}</a>`
    })
    DOMPurify.sanitize(linkedText);

    const getInitials = useInitials();
    return (
        <PageLayout parentClassName={"h-screen"} className="container mx-auto grid h-full gap-5 p-5 md:px-0 lg:grid-cols-5">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* Panneau gauche (immobile, dans le flux) */}
            <div className="hidden h-full overflow-hidden items-center gap-5 rounded-2xl bg-white p-5 text-center md:flex-col lg:flex">
                <Avatar>
                    <AvatarImage src={auth.user.image_profile && storage.local(auth.user.image_profile).url} className={auth.user.image_profile && 'object-cover'} />
                    <AvatarFallback>{getInitials(auth.user.name)}</AvatarFallback>
                </Avatar>
                <h2 className={'text-2xl'}>{auth.user.name}</h2>
                <nav>
                    <ul className={'space-y-2'}>
                        <li>
                            <Link href={members.index()} className={'hover:underline'}>
                                Liste des membres
                            </Link>
                        </li>
                        <li>
                            <Link href={groups.index()} className={'hover:underline'}>
                                Liste des groupes
                            </Link>
                        </li>
                        <li>
                            <Link href={pages.index()} className={"hover:underline"}>
                                Liste des pages
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
                    {postData.map((p) => (
                        <div key={p.id}>
                            <div className={'rounded bg-white p-5 space-y-5'}>
                                <div className={"flex items-center justify-between"}>
                                    <div className={'flex items-center gap-5'}>
                                        <Link href={members.show({slug: p.user.slug})}
                                              className={'flex items-center gap-5'}>
                                            <Avatar>
                                                <AvatarImage src={p.user.image_profile && storage.local(p.user.image_profile).url} />
                                                <AvatarFallback>{getInitials(p.user.name)}</AvatarFallback>
                                            </Avatar>
                                            <span>{p.user.name}</span>
                                        </Link>
                                        {p.group && (
                                            <>
                                                <RightArrow className={'w-5 h-5'} />
                                                <Link href={groups.create()}>{p.group.name}</Link>
                                            </>
                                        )}
                                    </div>
                                    <p className={"text-gray-400 text-xs"}>Le {new Date().toLocaleDateString(navigator.language, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</p></div>
                                <p>{p.content}</p>
                                <Button variant={"ghost"} onClick={() => handleLike(p.id)}>J'aime {p.likes}</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Panneau droit (immobile, dans le flux) */}
            <div className="hidden h-full overflow-hidden rounded-2xl bg-white p-5 lg:flex lg:flex-col">
                <h2 className={'py-5 text-center text-3xl flex-shrink-0'}>Suggestions</h2>
                <div className="flex-1 overflow-y-auto space-y-2">
                    {pageList.map(page => (
                        <Link className={"block hover:underline"} key={page.id} href={pages.show({slug: page.slug})}>{page.title}</Link>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
