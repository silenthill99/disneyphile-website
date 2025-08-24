import React from 'react';
import PageLayout from '@/layouts/page-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { SharedData, User } from '@/types';
import { Badge } from '@/components/ui/badge';

type Tags = {
    id: number;
    name: string;
}

type Posts = {
    content: string;
    image_path?: string;
    created_at: string;
}

const Show = () => {
    const { auth, user, can, tags, posts} = usePage<SharedData & {
        user: User,
        can: { view: boolean },
        tags: Tags[],
        posts: Posts[]
    }>().props;

    console.log('can.view =', can.view);
    // console.log("user.id =", user.id);
    console.log('auth.user?.id =', auth.user?.id);

    return (
        <PageLayout className={'p-5 container mx-auto grid md:grid-cols-4 gap-5 px-4 md:px-5'}>
            <Head title={user.name} />
            <div className={'bg-white hidden md:flex flex-col items-center p-8 rounded-xl gap-6 h-min shadow-md sticky top-24'}>
                <img
                    src={auth.user.image_profile ? ("/storage/" + auth.user.image_profile) : ("/assets/images/logo.svg")} alt={"Photo de profil"}
                    className={`size-40 object-cover rounded-full border-4 border-white shadow-lg transition duration-300 hover:shadow-xl ${!auth.user.image_profile && "bg-gray-200"}`}
                />
                <div className={"text-center"}>
                    <h2 className={'text-2xl font-semibold'}>{user.name}</h2>
                    {can.view && (
                        <Link href={route('dashboard')} className={"block mt-2 text-sm text-blue-600 hover:underline"}>Accéder à mon tableau de bord</Link>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur assumenda consequatur
                    delectus doloribus exercitationem ipsam iusto molestias nam obcaecati pariatur, ratione, recusandae
                    rerum saepe sint sit tempora tempore totam ut veritatis. Accusantium amet assumenda commodi dolorem
                    doloremque earum expedita id laboriosam mollitia nam neque nesciunt reiciendis, sed, vero
                    voluptatibus. Culpa dignissimos earum facilis magnam sed. Adipisci debitis, dolorum eaque illum
                    placeat ratione sed tenetur. Ad aliquid asperiores cum distinctio dolore dolores ducimus enim in
                    labore maiores nobis odio provident quas recusandae rerum saepe, sapiente tempora voluptates! Ab aut
                    consequuntur dolore eligendi et eum harum impedit inventore, minima modi numquam odio optio quas
                    ratione reprehenderit, soluta vero. Est laboriosam nihil quam quasi repellendus. Aliquid
                    consequuntur itaque totam. Inventore ipsam odio porro veniam. A culpa cum delectus dolor dolore
                    dolorem dolores eius eligendi ex fugit ipsam, iste laboriosam neque provident quia quibusdam sequi
                    sit, tenetur ut vel. Architecto asperiores aspernatur, cum, cumque debitis delectus deleniti est ex
                    excepturi fugit inventore laudantium nostrum numquam perferendis porro quasi sunt. A ad at commodi
                    dignissimos doloribus ea eligendi error eum fugit illum ipsa ipsum magnam maiores, maxime minima
                    nemo nihil numquam, perspiciatis quisquam quod quos ratione sequi sint sunt ullam vero, voluptas? A
                    cum cumque debitis deleniti, eum exercitationem ipsam magni nam, nesciunt nostrum quis saepe ut
                    voluptatibus. Animi maiores natus ut! Alias assumenda cumque cupiditate dolorem eaque eligendi error
                    est, eveniet ex facere incidunt ipsa iste itaque, iusto libero magnam minus modi nam natus nihil,
                    non nulla odio officia pariatur perspiciatis possimus quo ratione suscipit tenetur voluptatum. Ab ad
                    debitis doloremque eveniet excepturi expedita iste neque nulla, numquam optio porro provident
                    quaerat recusandae, repellendus sint suscipit veniam. Ab aliquam aspernatur autem cumque debitis
                    distinctio, harum impedit in ipsa iure libero magni minus modi necessitatibus nemo nulla officiis
                    quae, quibusdam rem repellat rerum saepe sed sunt temporibus unde veniam voluptate voluptates?
                    Accusantium, adipisci aliquam, animi aperiam atque consequuntur culpa, debitis delectus dignissimos
                    distinctio doloremque est inventore ipsum itaque iure labore laboriosam laudantium minima minus modi
                    mollitia nam obcaecati perferendis quidem quis repellat reprehenderit tempore ut vitae voluptas? A
                    aliquid animi cum dignissimos dolore dolores esse ex, laborum laudantium natus officiis, optio quasi
                    voluptates? Aspernatur doloribus, est expedita facere fugit iste, iusto minima minus nesciunt quae
                    quis sapiente, temporibus? Aliquam doloremque eius ex minus quasi repellat sequi soluta sunt? Id in
                    iusto laborum odit possimus qui quibusdam saepe sapiente unde. Alias amet delectus ducimus ea,
                    inventore, iusto laudantium molestias reiciendis repellat ut velit voluptates! Accusantium adipisci
                    blanditiis cum cupiditate debitis doloribus dolorum ducimus eius excepturi, fuga in inventore iste
                    laboriosam libero minima modi optio perferendis quas quia quidem quis quod quos sequi sit soluta ut
                    veniam voluptatem. A accusantium at aut consectetur cum cumque deserunt doloremque illo iste magni
                    mollitia, nihil nisi nobis numquam odio officia quis repellendus reprehenderit repudiandae similique
                    suscipit ullam, vitae! Commodi consequuntur deleniti ex facilis ipsa. Alias aliquid error eveniet
                    maxime molestiae quasi veniam, voluptatem? Ab aliquam asperiores aspernatur, consequuntur cum,
                    cumque deleniti dolor ducimus eum eveniet explicabo facere fuga fugit hic labore, laudantium maiores
                    molestiae necessitatibus nihil nobis nulla obcaecati provident reiciendis reprehenderit soluta
                    tempora tempore. Corporis cumque labore laborum quidem. Ab aliquam assumenda consectetur culpa, cum
                    ducimus enim, exercitationem expedita explicabo ipsam iste modi mollitia, nisi nulla optio placeat
                    quae rerum similique soluta sunt tempora temporibus voluptate. Aperiam cumque debitis dolore dolorem
                    ducimus excepturi fuga iure magnam mollitia, pariatur perferendis quis repellat repudiandae, sed,
                    suscipit? Atque consectetur consequuntur dicta eius in, ipsa iste laudantium modi numquam odio
                    soluta tempora, totam voluptatum. Asperiores, consequuntur dicta ducimus est eum facere fugiat id
                    illo maiores minima molestiae nesciunt nulla pariatur provident quod. Amet commodi consectetur culpa
                    cumque excepturi fuga incidunt magni molestias necessitatibus, officia officiis pariatur
                    perspiciatis porro qui quibusdam quis quisquam tempore. Culpa cumque dignissimos exercitationem
                    fugiat id libero placeat quae similique temporibus veniam. Accusamus at error quisquam. Consectetur
                    cum cumque debitis itaque nostrum placeat possimus quibusdam quisquam quos ut. A ab aspernatur at
                    autem blanditiis commodi consequuntur culpa, dignissimos doloribus dolorum eos excepturi in, libero
                    magnam molestiae, mollitia possimus praesentium qui quod quos recusandae rem repellat similique sint
                    sunt suscipit tempore veritatis vero vitae voluptates. Autem commodi corporis dicta distinctio
                    dolores ea eaque explicabo fuga fugit impedit in itaque, nisi odit officia pariatur quae quia
                    repudiandae soluta suscipit tempore veniam vitae voluptas voluptates. Consectetur distinctio ducimus
                    eveniet iste labore magni nam necessitatibus, nihil, nulla obcaecati quas ratione repellat.
                    Accusantium atque, cumque deleniti dignissimos doloremque dolorum, ducimus earum error, eveniet
                    harum modi pariatur quo reiciendis similique sint sit velit. Alias architecto aspernatur autem
                    delectus distinctio, dolorem eaque excepturi fugiat fugit magnam magni nisi, officiis qui quisquam
                    recusandae saepe ut veniam. Accusantium atque facilis quasi repudiandae sint. Ab ad atque aut
                    beatae, commodi consectetur debitis deleniti dignissimos doloremque doloribus ducimus earum eos esse
                    exercitationem id ipsam, mollitia nobis officia placeat, possimus praesentium quia quod quos soluta
                    sunt unde veritatis voluptatem. Architecto consectetur dolore, eos, et inventore iure magni modi
                    pariatur perferendis, quo quos reiciendis soluta tenetur voluptate voluptatibus! Accusamus
                    accusantium architecto aut commodi corporis deserunt dolorem doloremque doloribus eos eveniet
                    explicabo, facere hic impedit ipsam laboriosam minus nesciunt nihil nisi obcaecati odit omnis optio,
                    porro reprehenderit sequi voluptatem. Architecto asperiores cupiditate ea impedit incidunt
                    necessitatibus obcaecati quam, quod quos ullam. Aliquam earum eum in iusto laboriosam perspiciatis
                    quis sequi tempora! Esse illum incidunt nostrum omnis quasi soluta! A ab accusantium assumenda at
                    consequuntur cupiditate dicta earum fugiat id illum ipsum laudantium maiores nemo, neque nesciunt
                    quo reiciendis sed tenetur velit voluptatem! Dignissimos enim eos impedit in omnis provident
                    voluptate! Adipisci aliquam, aliquid blanditiis deleniti distinctio doloribus eaque earum esse
                    excepturi illo ipsam iste minima repellat temporibus veritatis. Dolor dolorum earum ipsum maxime
                    molestias, natus omnis quam quo ratione rerum? Aliquam, beatae commodi harum iusto nesciunt quas
                    sit. Asperiores beatae, dolorem facere illo, illum laudantium mollitia quia repellat repellendus
                    repudiandae sapiente temporibus. Aspernatur delectus eaque error eveniet magni natus, pariatur quas
                    rem tempora voluptatem. Cum iste laborum, numquam obcaecati perspiciatis praesentium similique
                    ullam? Dignissimos eaque esse in, iste nihil praesentium quas reprehenderit veniam!</p>
            </div>
        </PageLayout>
    );
};

export default Show;
