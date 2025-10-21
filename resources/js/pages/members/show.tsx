import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { SharedData, User } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Posts } from '@/types/posts';
import { Tag } from '@/types/tags';
import { dashboard } from '@/routes';



const Show = () => {
    const {user, can, tags, posts} = usePage<SharedData & {
        user: User,
        can: { view: boolean },
        tags: Tag[],
        posts: Posts[]
    }>().props;

    return (
        <PageLayout className={'p-5 container mx-auto grid md:grid-cols-4 gap-5 px-4 md:px-5'}>
            <Head title={user.name} />
            <div className={'bg-white hidden md:flex flex-col items-center p-8 rounded-xl gap-6 h-min shadow-md sticky top-24'}>
                <img
                    src={user.image_profile ? ("/storage/" + user.image_profile) : ("/assets/images/logo.svg")} alt={"Photo de profil"}
                    className={`size-40 object-cover rounded-full border-4 border-white shadow-lg transition duration-300 hover:shadow-xl ${!user.image_profile && "bg-gray-200"}`}
                />
                <div className={"text-center"}>
                    <h2 className={'text-2xl font-semibold'}>{user.name}</h2>
                    {can.view && (
                        <Link href={dashboard()} className={"block mt-2 text-sm text-blue-600 hover:underline"}>Accéder à mon tableau de bord</Link>
                    )}
                    <Link className={"block mt-1 text-sm text-blue-600 hover:underline"} href={"#"}>Groupes</Link>
                </div>
                <div className={"w-full mt-4"}>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
                    {tags.length === 0 ? (
                        <p className={"text-sm text-gray-400"}>Aucun tags actuellement</p>
                    ) : (
                        <div className={'flex flex-wrap gap-2'}>
                            {tags.map((tag) => (
                                <Badge key={tag.id}>{tag.name}</Badge>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className={'bg-white/90 rounded-md md:col-span-3 backdrop-blur-md md:overflow-y-auto p-5'}>
                {posts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader className={"flex-row items-center justify-between"}>
                            <CardTitle>{post.user.name}</CardTitle>
                            <p>Le {new Date(post.created_at).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}</p>
                        </CardHeader>
                        <CardContent>
                            <p>{post.content}</p>
                        </CardContent>
                        <CardFooter>
                            {post.image.map(image => (
                                <img key={image.id} src={'/storage/' + image.image_path} alt={""} />
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </PageLayout>
    );
};

export default Show;
