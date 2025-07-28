import { Head, Link, usePage } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';
import { SharedData } from '@/types';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
        <PageLayout className="grid md:grid-cols-5 gap-5 h-full container mx-auto py-5">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* Panneau gauche (immobile, dans le flux) */}
            <div className="hidden md:flex bg-white rounded-2xl h-full p-5 md:flex-col items-center gap-5">
                <img src="/assets/images/logo.svg" className={"w-15 h-15 rounded-full bg-gray-200"} alt="" />
                <h2 className={"text-2xl"}>{auth.user.name}</h2>
                <nav>
                    <ul>
                        <li><Link href={route("members.index")} className={"hover:underline"}>Liste des membres</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Centre (le seul scrollable) */}
            <div className="col-span-3 rounded-2xl h-full overflow-y-auto p-4 backdrop-blur-md bg-white/80">
                <div className={"bg-white min-h-50 rounded-2xl p-2"}>
                    <Textarea className={"resize-none"} placeholder={"Ajouter un nouveau post"}/>
                </div>
            </div>

            {/* Panneau droit (immobile, dans le flux) */}
            <div className="hidden md:block bg-white rounded-2xl h-full overflow-hidden p-5">
                <h2 className={"text-3xl text-center py-5"}>Suggestions</h2>
                <div className={"flex items-center gap-2 border p-1"}>
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
