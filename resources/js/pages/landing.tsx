
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InfosCGU from '@/components/infos-cgu';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import register from '@/routes/register';
import login from '@/routes/login';
import { Checkbox } from '@/components/ui/checkbox';

const Landing = () => {

    return (
        <div className={"min-h-screen bg-[url('/disneyland-486098.jpg')] bg-cover bg-fixed bg-center"}>
            {/*<Header />*/}
            <main className={'min-h-screen gap-10 bg-black/50 p-5 2xl:p-0'}>
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
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Créer un compte</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Form {...register.store.form()} resetOnSuccess={true} resetOnError={['password', 'password_confirmation']}>
                                        {({errors, processing}) => (
                                            <>
                                                <Label htmlFor={"email"}>Adresse mail</Label>
                                                <Input
                                                    type={'email'}
                                                    placeholder={'Votre adresse mail'}
                                                    name={"email"}
                                                    id={"email"}
                                                />
                                                {errors.email && (
                                                    <p className={"text-red-500"}>{errors.email}</p>
                                                )}
                                                <br />
                                                <Label htmlFor={"name"}>Votre nom</Label>
                                                <Input
                                                    type={'text'}
                                                    placeholder={'Votre nom'}
                                                    id={"name"}
                                                    name={"name"}
                                                />
                                                {errors.name && (
                                                    <p className={"text-red-500"}>{errors.name}</p>
                                                )}
                                                <br />
                                                <Label htmlFor={"password"}>Votre mot de passe</Label>
                                                <Input
                                                    type={'password'}
                                                    placeholder={'Votre mot de passe'}
                                                    id={"password"}
                                                    name={"password"}
                                                />
                                                {errors.password && (
                                                    <p className={"text-red-500"}>{errors.password}</p>
                                                )}
                                                <br />
                                                <Label htmlFor={"password_confirmation"}>Confirmez votre mot de passe</Label>
                                                <Input
                                                    type={'password'}
                                                    placeholder={'Confirmez votre mot de passe'}
                                                    id={"password_confirmation"}
                                                    name={"password_confirmation"}
                                                />
                                                {errors.password_confirmation && (
                                                    <p className={"text-red-500"}>{errors.password_confirmation}</p>
                                                )}
                                                <br />
                                                <Input type={"date"} name={"birth_date"} />
                                                {errors.birth_date && (
                                                    <p className="text-red-500">{errors.birth_date}</p>
                                                )}
                                                <br/>
                                                <Button type={'submit'} className={'cursor-pointer transition-all duration-200 ease-in-out hover:bg-pink-600'}>
                                                    Rejoignez la magie
                                                    {processing && <LoaderCircle className={'animate-spin'} />}
                                                </Button>
                                            </>
                                        )}
                                    </Form>
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
                                    <Form {...login.store.form()} resetOnSuccess={true} resetOnError={['password']}>
                                        {({errors, processing}) => (
                                            <div className={"space-y-4"}>
                                                <div>
                                                    <Label htmlFor={'email'}>Adresse mail</Label>
                                                    <Input
                                                        type={'email'}
                                                        placeholder={'Adresse mail'}
                                                        id={'email'}
                                                        name={'email'}
                                                    />
                                                    {errors.email && (
                                                        <p className={'text-red-500'}>{errors.email}</p>
                                                    )}
                                                </div>
                                                <div>
                                                    <Label htmlFor={'password'}>Mot de pase</Label>
                                                    <Input
                                                        type={'password'}
                                                        placeholder={'Votre mot de passe'}
                                                        id={'password'}
                                                        name={'password'}
                                                    />
                                                    {errors.password && (
                                                        <p className={'text-red-500'}>{errors.password}</p>
                                                    )}
                                                </div>
                                                <div className={"flex items-center gap-2"}>
                                                    <Checkbox
                                                        id={'remember'}
                                                        name={'remember'}
                                                    />
                                                    <Label htmlFor={"remember"}>Se souvenir de moi</Label>
                                                </div>
                                                <Button type={'submit'} className={'cursor-pointer transition-all duration-200 ease-in-out hover:bg-pink-600'}>
                                                    Bon retour parmi nous ! {processing && <LoaderCircle className={'animate-spin'} />}
                                                </Button>
                                            </div>
                                        )}
                                    </Form>
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
