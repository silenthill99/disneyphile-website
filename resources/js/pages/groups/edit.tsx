import React, { ChangeEvent, useState } from 'react';
import PageLayout from '@/layouts/page-layout';
import { Form, usePage } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Groups } from '@/types/groups';
import { Input } from '@/components/ui/input';
import groups from '@/routes/groups';
import { ImageIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type Props = {
    group: Groups
}

const Edit = () => {
    const {group} = usePage<Props>().props
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    }

    return (
        <PageLayout className={"container mx-auto bg-white p-5 rounded my-20 overflow-y-auto"}>
            <Form {...groups.update.form({group: group.slug})} resetOnSuccess>
                {({errors}) => (
                    <>
                        <Label htmlFor={"name"}>Nom du groupe</Label>
                        <Input
                            id={"name"}
                            name={"name"}
                            placeholder={"Nom du groupe"}
                            defaultValue={group.name}
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name}</p>
                        )}
                        <br/>
                        <Label htmlFor={"image"} className={"cursor-pointer group block w-fit"}>
                            Bannière
                            <Input
                                type={"file"}
                                id={"image"}
                                name={"banniere"}
                                onChange={handleChange}
                                className={"hidden"}
                            />
                            <ImageIcon className={"bg-gray-300 group-hover:bg-gray-500 p-5 rounded-md mt-2"} size={75}/>
                        </Label>
                        {errors.banniere && (
                            <p className="text-red-500">{errors.banniere}</p>
                        )}
                        <br/>
                        {preview && (
                            <>
                                <img src={preview} alt="Preview" className={'w-100 rounded-md'} />
                                <br/>
                            </>
                        )}
                        <Label htmlFor={"description"}>Description</Label>
                        <Textarea
                            id={"description"}
                            name={"description"}
                            className={"resize-none h-50"}
                            placeholder={"Description"}
                            defaultValue={group.description}
                        />
                        {errors.description && (
                            <p className="text-red-500">{errors.description}</p>
                        )}
                        <br/>
                        <div className={"flex items-center gap-2"}>
                            <Label htmlFor={"private"}>Groupe privé</Label>
                            <Input
                                id="private"
                                type={"checkbox"}
                                defaultChecked={group.private}
                                className={"w-5"}
                            />
                            {errors.private && (
                                <p className={"text-red-500"}>{errors.private}</p>
                            )}
                            <br/>
                        </div>
                        <br/>
                        <Button variant={"destructive"}>Modifier le groupe</Button>
                    </>
                )}
            </Form>
        </PageLayout>
    );
};

export default Edit;
