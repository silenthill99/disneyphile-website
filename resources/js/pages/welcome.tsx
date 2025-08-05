import { Head, Link, usePage } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';
import { SharedData } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DOMPurify from 'dompurify';
import { Textarea } from '@/components/ui/textarea';

export default function Welcome() {
    const {auth} = usePage<SharedData>().props;

    const text = "Attention à tiktok : https://www.youtube.com/watch?v=jrJ5CNeoTXU"
    const rejex = /https?:\/\/[^\s]+/g;
    const linkedText = text.replace(rejex, (url) => {
        return `<a href="${url}" class="text-blue-500">${url}</a>`
    })
    DOMPurify.sanitize(linkedText);
    return (
        <PageLayout className="container mx-auto grid h-full gap-5 p-5 md:px-0 lg:grid-cols-5">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* Panneau gauche (immobile, dans le flux) */}
            <div className="hidden h-full items-center gap-5 rounded-2xl bg-white p-5 md:flex-col lg:flex text-center">
                <Avatar>
                    {auth.user.image_profile ? (
                        <AvatarImage src={'/storage/' + auth.user.image_profile} className={"object-cover"}/>
                    ) : (
                        <AvatarImage src={'/assets/images/logo.svg'} className={'bg-gray-200'} />
                    )}
                </Avatar>
                <h2 className={'text-2xl'}>{auth.user.name}</h2>
                <nav>
                    <ul className={"space-y-2"}>
                        <li>
                            <Link href={route('members.index')} className={'hover:underline'}>
                                Liste des membres
                            </Link>
                        </li>
                        <li>
                            <Link href={route("groups")} className={"hover:underline"}>Liste des groupes</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Centre (le seul scrollable) */}
            <div className="overflow col-span-3 h-full rounded-2xl bg-white/80 p-4 backdrop-blur-md">
                <div className={'min-h-50 rounded-2xl bg-white p-2'}>
                    <Textarea className={'resize-none'} placeholder={'Ajouter un nouveau post'} />
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
