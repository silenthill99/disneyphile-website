import React, { FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

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
        postLogin(route('login'))
    }

    function registerSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postRegister(route('register'))
    }

    return (
        <div className={"bg-[url('/disneyland-486098.jpg')] min-h-screen bg-cover bg-center bg-fixed flex flex-col"}>
            {/*<Header />*/}
            <main className={"grow flex items-center justify-center bg-black/50 gap-10"}>
                <div className={"container mx-auto grid md:grid-cols-2"}>
                    <div className={"text-white flex flex-col justify-center"}>
                        <h1 className={"text-5xl font-bold mb-2 drop-shadow-lg"}>Disneyphile</h1>
                        <p className={"text-lg text-white/80"}>Là où la magie prends vie</p>
                    </div>
                    <Tabs defaultValue={"register"} >
                        <TabsList>
                            <TabsTrigger value={"register"}>Créer un compte</TabsTrigger>
                            <TabsTrigger value={"login"}>Se connecter</TabsTrigger>
                        </TabsList>
                        <TabsContent value={"register"}>
                            <form onSubmit={registerSubmit} className={"bg-white/90 backdrop-blur-sm min-h-100 min-w-100 rounded-xl p-5 shadow-xl ring-1 ring-white/10"}>
                                <Label>Adresse mail</Label>
                                <Input
                                    type={"email"}
                                    placeholder={"Votre adresse mail"}
                                    value={registerData.email}
                                    onChange={e => setRegisterData("email", e.target.value)}
                                /> <br/>
                                <Label>Votre nom</Label>
                                <Input
                                    type={"text"}
                                    placeholder={"Votre nom"}
                                    value={registerData.name}
                                    onChange={e => setRegisterData("name", e.target.value)}
                                /><br/>
                                <Label>Votre mot de passe</Label>
                                <Input
                                    type={"password"}
                                    placeholder={"Votre mot de passe"}
                                    value={registerData.password}
                                    onChange={e => setRegisterData("password", e.target.value)}
                                /> <br/>
                                <Label>Confirmez votre mot de passe</Label>
                                <Input
                                    type={"password"}
                                    placeholder={"Confirmez votre mot de passe"}
                                    value={registerData.password_confirmation}
                                    onChange={e => setRegisterData("password_confirmation", e.target.value)}
                                /> <br/>
                                <Button type={"submit"} className={"hover:bg-pink-600 cursor-pointer transition-all duration-200 ease-in-out"}>Rejoignez la magie
                                    {registerProcessing && <LoaderCircle className={"animate-spin"}/> }
                                </Button>
                            </form>
                        </TabsContent>
                        <TabsContent value={"login"}>
                            <form className={"min-w-100 min-h-100 bg-white/90 backdrop-blur-sm rounded-xl p-5"} onSubmit={loginSubmit}>
                                <Label>Adresse mail</Label>
                                <Input
                                    type={"email"}
                                    placeholder={"Adresse mail"}
                                    value={loginData.email}
                                    onChange={e => setLoginData('email', e.target.value)}
                                /> <br/>
                                <Label>Mot de pase</Label>
                                <Input
                                    type={"password"}
                                    placeholder={"Votre mot de passe"}
                                    value={loginData.password}
                                    onChange={e => setLoginData('password', e.target.value)}
                                /> <br/>
                                <Button type={"submit"} className={"hover:bg-pink-600 cursor-pointer transition-all duration-200 ease-in-out"}>Bon retour parmi nous ! {loginProcessing && <LoaderCircle className={"animate-spin"}/>}</Button>
                            </form>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
};

export default Landing;
