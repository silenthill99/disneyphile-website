import { Head, Link, usePage } from '@inertiajs/react';
import PageLayout from '@/layouts/page-layout';
import { SharedData } from '@/types';
export default function Welcome() {
    const {auth} = usePage<SharedData>().props;
    return (
        <PageLayout className="grid md:grid-cols-4 gap-5 h-full container mx-auto p-5">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* Panneau gauche (immobile, dans le flux) */}
            <div className="hidden md:flex bg-white rounded-2xl h-full p-5 md:flex-col items-center gap-5">
                <img src="/assets/images/logo.svg" className={"w-30 h-30 rounded-full bg-gray-200"} alt="" />
                <h2 className={"text-3xl"}>{auth.user.name}</h2>
                <nav>
                    <ul>
                        <li><Link href={route("members.index")} className={"hover:underline"}>Liste des membres</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Centre (le seul scrollable) */}
            <div className="col-span-2 bg-white/75 rounded-2xl h-full overflow-y-auto p-4 ">

            </div>

            {/* Panneau droit (immobile, dans le flux) */}
            <div className="hidden md:block bg-white rounded-2xl h-full overflow-hidden">
                {/* contenu */}
            </div>
        </PageLayout>
    );
}
