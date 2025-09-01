const Rules = () => {
    return (
        <div className={'flex min-h-screen flex-col bg-gray-300'}>
            <header className={'h-19.5 bg-linear-to-r from-cyan-500 to-[#B562EB] text-white'}>
                <div className={'container mx-auto flex h-full items-center justify-between'}>
                    <div className={'flex gap-5'}>
                        <span className="text-5xl text-white">★</span>
                        <span className="text-5xl text-white">★</span>
                    </div>
                    <h1 className={'font-bold'}>Conditions générales d'utilisation</h1>
                    <div className={'flex gap-5'}>
                        <span className="text-5xl text-white">★</span>
                        <span className="text-5xl text-white">★</span>
                    </div>
                </div>
            </header>
            <main className={'m-5 grow rounded-2xl bg-white'}>
                <div className={'space-y-5 container mx-auto'}>
                    <h1 className={'font-bold text-4xl'}>Introduction</h1>
                    <p>
                        Ces conditions générales d'utilisation ont été mises en place afin d'assurer une bonne harmonie au sein de ce site internet, ainsi que d'assurer la sécurité de tous. <br />
                        <br />
                        Elles peuvent être amenées à changer à tout moments, merci de bien vouloir venir les consulter de manière régulière.
                    </p>
                    <div>
                        <h1 className={'font-bold text-4xl/17.5 mb-6'}>Article 1 - Comptes</h1>
                        <ul>
                            <li className={"mb-6"}>
                                <span className={'text-2xl/12.5 font-semibold'}>1.1 Age minimum</span>
                                <p className={"text-lg/10"}>Afin de garantir un minimum de sécurité, l'age recquis pour avoir accès à un compte sur notre plateforme est de 13 ans minimum.</p>
                            </li>
                            <li className={"mb-6"}>
                                <span className={'text-2xl/12.5 font-semibold'}>1.2 Pseudo et photo de profil</span>
                                <p className={"text-lg/10"}>Toutes photos de profil et pseudos à caractères pornographique, politique, terroriste ou religieux sont à proscrire</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Rules;
