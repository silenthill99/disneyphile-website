import React, { FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InfosCGU from '@/components/infos-cgu';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type LoginProps = {
    email: string;
    password: string;
}

type RegisterProps = {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
    birth_date: string;
}
const Landing = () => {

    const {data: loginData, setData: setLoginData, post:postLogin, processing: loginProcessing, errors: loginErrors} = useForm<Required<LoginProps>>({
        email: "",
        password: ""
    })

    const {data: registerData, setData: setRegisterData, post: postRegister, processing: registerProcessing, errors: registerErrors} = useForm<Required<RegisterProps>>({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
        birth_date: ""
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
        <div className={"min-h-screen bg-[url('/disneyland-486098.jpg')] bg-cover bg-fixed bg-center"}>
            {/*<Header />*/}
            <main className={'min-h-screen gap-10 bg-black/50'}>
                <div className={'container mx-auto grid md:grid-cols-2 min-h-screen items-center'}>
                    <div className={'flex flex-col justify-center text-white'}>
                        <h1 className={'mb-2 text-5xl font-bold drop-shadow-lg'}>Disneyphile</h1>
                        <p className={'text-lg text-white/80'}>Là où la magie prends vie</p>
                    </div>
                    <Tabs defaultValue={'register'}>
                        <TabsList>
                            <TabsTrigger value={'register'} className={"cursor-pointer"}>Créer un compte</TabsTrigger>
                            <TabsTrigger value={'login'} className={"cursor-pointer"}>Se connecter</TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value={'register'}
                            // className={'min-w-100 rounded-xl bg-white/90 p-5 shadow-xl ring-1 ring-white/10 backdrop-blur-sm grow min-h-100'}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Créer un compte</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={registerSubmit}>
                                        <Label>Adresse mail</Label>
                                        <Input
                                            type={'email'}
                                            placeholder={'Votre adresse mail'}
                                            value={registerData.email}
                                            onChange={(e) => setRegisterData('email', e.target.value)}
                                        />
                                        {registerErrors.email && (
                                            <p className={"text-red-500"}>{registerErrors.email}</p>
                                        )}
                                        <br />
                                        <Label>Votre nom</Label>
                                        <Input
                                            type={'text'}
                                            placeholder={'Votre nom'}
                                            value={registerData.name}
                                            onChange={(e) => setRegisterData('name', e.target.value)}
                                        />
                                        {registerErrors.name && (
                                            <p className={"text-red-500"}>{registerErrors.name}</p>
                                        )}
                                        <br />
                                        <Label>Votre mot de passe</Label>
                                        <Input
                                            type={'password'}
                                            placeholder={'Votre mot de passe'}
                                            value={registerData.password}
                                            onChange={(e) => setRegisterData('password', e.target.value)}
                                        />
                                        {registerErrors.password && (
                                            <p className={"text-red-500"}>{registerErrors.password}</p>
                                        )}
                                        <br />
                                        <Label>Confirmez votre mot de passe</Label>
                                        <Input
                                            type={'password'}
                                            placeholder={'Confirmez votre mot de passe'}
                                            value={registerData.password_confirmation}
                                            onChange={(e) => setRegisterData('password_confirmation', e.target.value)}
                                        />
                                        {registerErrors.password_confirmation && (
                                            <p className={"text-red-500"}>{registerErrors.password_confirmation}</p>
                                        )}
                                        <br />
                                        <Input type={"date"}
                                               value={registerData.birth_date}
                                               onChange={e => setRegisterData("birth_date", e.target.value)}
                                        />
                                        {registerErrors.birth_date && (
                                            <p className="text-red-500">{registerErrors.birth_date}</p>
                                        )}
                                        <br/>
                                        <Button type={'submit'} className={'cursor-pointer transition-all duration-200 ease-in-out hover:bg-pink-600'}>
                                            Rejoignez la magie
                                            {registerProcessing && <LoaderCircle className={'animate-spin'} />}
                                        </Button>
                                    </form>
                                </CardContent>
                                <CardFooter>
                                    <InfosCGU className={'text-sm'} />
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent
                            value={'login'}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Se connecter</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={loginSubmit}>
                                        <Label>Adresse mail</Label>
                                        <Input
                                            type={'email'}
                                            placeholder={'Adresse mail'}
                                            value={loginData.email}
                                            onChange={(e) => setLoginData('email', e.target.value)}
                                        />
                                        {loginErrors.email && (
                                            <p className={"text-red-500"}>{loginErrors.email}</p>
                                        )}
                                        <br />
                                        <Label>Mot de pase</Label>
                                        <Input
                                            type={'password'}
                                            placeholder={'Votre mot de passe'}
                                            value={loginData.password}
                                            onChange={(e) => setLoginData('password', e.target.value)}
                                        />
                                        {loginErrors.password && (
                                            <p className={"text-red-500"}>{loginErrors.password}</p>
                                        )}
                                        <br />
                                        <Button type={'submit'} className={'cursor-pointer transition-all duration-200 ease-in-out hover:bg-pink-600'}>
                                            Bon retour parmi nous ! {loginProcessing && <LoaderCircle className={'animate-spin'} />}
                                        </Button>
                                    </form>
                                </CardContent>
                                <CardFooter>
                                    <InfosCGU className={'text-sm'} />
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
};

export default Landing;
