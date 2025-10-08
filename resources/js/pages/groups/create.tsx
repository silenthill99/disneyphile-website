import React, { FormEvent, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageLayout from '@/layouts/page-layout';
import { Textarea } from '@/components/ui/textarea';

type FormProps = {
    name: string;
    banniere: File | null;
    description: string;
    private: boolean;
}

type Flash = {
    createdGroup?: string;
}

const Create = () => {
    const { flash } = usePage<{ flash: Flash }>().props;
    const {data, setData, post, reset, errors} = useForm<Required<FormProps>>({
        name: "",
        banniere: null,
        description: "",
        private: false
    })

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        post(route('groups.store'), {
            onSuccess: () => reset()
        })
    }

    const [preview, setPreview] = useState<string | null>(null);
    return (
        <PageLayout className={"container mx-auto bg-white p-5 rounded my-20 overflow-y-auto"}>
            <form onSubmit={handleSubmit}>
                <Label>Nom du groupe</Label>
                <Input
                    placeholder={"Nom du groupe"}
                    value={data.name}
                    onChange={e => setData("name", e.target.value)}
                />
                {errors.name && (
                    <p className={"text-red-500"}>{errors.name}</p>
                )}
                <br/>
                <Label>Bannière</Label>
                <Input
                    type={"file"}
                    accept={"image/*"}
                    onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setData("banniere", file)
                            setPreview(URL.createObjectURL(file))
                        }
                    }}
                />
                {errors.banniere && (
                    <p className={"text-red-500"}>{errors.banniere}</p>
                )}
                <br/>
                {preview && (
                    <>
                        <img src={preview} alt="Preview" className={"w-100 rounded-md"} />
                        <br/>
                    </>
                )}
                <Label htmlFor={"description"}>Description</Label>
                <Textarea
                    id={"description"}
                    className={"resize-none h-50"}
                    placeholder={"Décrivez votre groupe en quelques mots"}
                    value={data.description}
                    onChange={e => setData("description", e.target.value)}
                />
                {errors.description && (
                    <p className={"text-red-500"}>{errors.description}</p>
                )}
                <div className={"flex items-center gap-2"}>
                    <Label htmlFor={"private"}>Groupe privé</Label>
                    <Input
                        id="private"
                        type={"checkbox"}
                        checked={data.private}
                        onChange={() => setData("private", !data.private)}
                        className={"w-5"}
                    />
                    {errors.private && (
                        <p className={"text-red-500"}>{errors.private}</p>
                    )}
                <br/>
                </div><br/>
                <Button variant={"destructive"}>Créer le groupe</Button>
            </form>
            {flash.createdGroup && (
                <p className={"text-green-900"}>Groupe créé avec succès !</p>
            )}
        </PageLayout>
    );
};

export default Create;
