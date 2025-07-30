import React, { FormEvent } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageLayout from '@/layouts/page-layout';

type FormProps = {
    name: string;
    private: boolean;
}

type Flash = {
    createdGroup?: string;
}

const Create = () => {
    const { flash } = usePage<{ flash: Flash }>().props;
    const {data, setData, post, reset} = useForm<Required<FormProps>>({
        name: "",
        private: false
    })

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        post(route('groups.store'), {
            onSuccess: () => reset()
        })
    }

    return (
        <PageLayout className={"container mx-auto bg-white p-5 rounded my-20"}>
            <form onSubmit={handleSubmit}>
                <Label>Nom du groupe</Label>
                <Input
                    placeholder={"Nom du groupe"}
                    value={data.name}
                    onChange={e => setData("name", e.target.value)}
                />
                <br/>
                <div className={"flex items-center gap-2"}>
                    <Label htmlFor={"private"}>Groupe privé</Label>
                    <Input
                        id="private"
                        type={"checkbox"}
                        checked={data.private}
                        onChange={() => setData("private", !data.private)}
                        className={"w-5"}
                    />
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
