import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, SharedData } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { updateProfile } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

type FormProps = {
    photo: File | null
}

export default function Dashboard() {

    const {auth} = usePage<SharedData>().props

    const {setData, post, reset} = useForm<Required<FormProps>>({
        photo: null,
    })

    function handleChange(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        post(updateProfile({slug: auth.user.slug}).url, {
            onSuccess: () => reset()
        })
    }

    const [preview, setPreview] = useState<string|null>(null);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className={'h-full rounded-2xl bg-white p-5'}>
                <h1>Changer la photo de profil</h1>
                <form onSubmit={handleChange}>
                    <Input
                        type={'file'}
                        accept={'image/*'}
                        name={'photo'}
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setData("photo", file)
                                setPreview(URL.createObjectURL(file))
                            }
                        }}
                    /><br/>
                    <Button type={"submit"}>Valider</Button>
                    <br/>
                    {preview && (
                        <>
                            <br/>
                            <img src={preview} className={"w-100 rounded-md"} alt={"Preview"}/>
                        </>
                    )}
                </form>
            </div>
        </AppLayout>
    );
}
