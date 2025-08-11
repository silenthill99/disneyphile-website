import React, { FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InfosCGU from '@/components/infos-cgu';

type LoginProps = {
    email: string;
    password: string;
}

type RegisterProps = {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
}
const Landing = () => {

    const {data: loginData, setData: setLoginData, post:postLogin, processing: loginProcessing} = useForm<Required<LoginProps>>({
        email: "",
        password: ""
    })

    const {data: registerData, setData: setRegisterData, post: postRegister, processing: registerProcessing} = useForm<Required<RegisterProps>>({
        email: "",
        name: "",
        password: "",
        password_confirmation: ""
    })

    function loginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postLogin(route('login.store'))
    }

    function registerSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postRegister(route('register'))
    }

    return (
        <div className={"flex min-h-screen flex-col bg-[url('/disneyland-486098.jpg')] bg-cover bg-fixed bg-center"}>
            {/*<Header />*/}
            <main className={'flex grow items-center justify-center gap-10 bg-black/50'}>
                <div className={'container mx-auto grid md:grid-cols-2'}>
                    <div className={'flex flex-col justify-center text-white'}>
                        <h1 className={'mb-2 text-5xl font-bold drop-shadow-lg'}>Disneyphile</h1>
                        <p className={'text-lg text-white/80'}>Là où la magie prends vie</p>
                    </div>
                    <Tabs defaultValue={'register'} className={'h-100'}>
                        <TabsList>
                            <TabsTrigger value={'register'}>Créer un compte</TabsTrigger>
                            <TabsTrigger value={'login'}>Se connecter</TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value={'register'}
                            className={
                                'flex min-w-100 flex-col rounded-xl bg-white/90 p-5 shadow-xl ring-1 ring-white/10 backdrop-blur-sm'
                            }
                        >
                            <form onSubmit={registerSubmit}>
                                <Label>Adresse mail</Label>
                                <Input
                                    type={'email'}
                                    placeholder={'Votre adresse mail'}
                                    value={registerData.email}
                                    onChange={(e) => setRegisterData('email', e.target.value)}
                                />{' '}
                                <br />
                                <Label>Votre nom</Label>
                                <Input
                                    type={'text'}
                                    placeholder={'Votre nom'}
                                    value={registerData.name}
                                    onChange={(e) => setRegisterData('name', e.target.value)}
                                />
                                <br />
                                <Label>Votre mot de passe</Label>
                                <Input
                                    type={'password'}
                                    placeholder={'Votre mot de passe'}
                                    value={registerData.password}
                                    onChange={(e) => setRegisterData('password', e.target.value)}
                                />{' '}
                                <br />
                                <Label>Confirmez votre mot de passe</Label>
                                <Input
                                    type={'password'}
                                    placeholder={'Confirmez votre mot de passe'}
                                    value={registerData.password_confirmation}
                                    onChange={(e) => setRegisterData('password_confirmation', e.target.value)}
                                />{' '}
                                <br />
                                <Button type={'submit'} className={'cursor-pointer transition-all duration-200 ease-in-out hover:bg-pink-600'}>
                                    Rejoignez la magie
                                    {registerProcessing && <LoaderCircle className={'animate-spin'} />}
                                </Button>
                            </form>
                            <br />
                            <InfosCGU className={'text-sm'} />
                        </TabsContent>
                        <TabsContent
                            value={'login'}
                            className={'flex min-w-100 flex-col justify-between rounded-xl bg-white/90 p-5 backdrop-blur-sm'}
                        >
                            <form onSubmit={loginSubmit}>
                                <Label>Adresse mail</Label>
                                <Input
                                    type={'email'}
                                    placeholder={'Adresse mail'}
                                    value={loginData.email}
                                    onChange={(e) => setLoginData('email', e.target.value)}
                                />{' '}
                                <br />
                                <Label>Mot de pase</Label>
                                <Input
                                    type={'password'}
                                    placeholder={'Votre mot de passe'}
                                    value={loginData.password}
                                    onChange={(e) => setLoginData('password', e.target.value)}
                                />{' '}
                                <br />
                                <Button type={'submit'} className={'cursor-pointer transition-all duration-200 ease-in-out hover:bg-pink-600'}>
                                    Bon retour parmi nous ! {loginProcessing && <LoaderCircle className={'animate-spin'} />}
                                </Button>
                            </form>
                            <InfosCGU className={'text-sm'} />
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
};

export default Landing;
