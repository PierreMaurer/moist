export const Footer = () => {
    return (
        <div className="relative h-full w-screen overflow-hidden bg-[#121316] flex flex-col">
            <div className="ms-20 mt-[100px] flex flex-col gap-10 md:gap-0 md:flex-row justify-between me-20">
                <div className="flex flex-col gap-10">
                    <p className="text-[#F4CC81] text-sm">A PROPOS DE MOIST</p>
                    <div className="font-[Inter] w-auto lg:w-[340px] flex flex-col gap-2">
                        <p>MOIST est la marque de soda qui va vous désaltérer tout en vous offrant des saveurs uniques au monde. </p>
                        <p>Comme si vous dégustiez un met exquis dans un restaurant luxueux, appréciez la complexité des arômes spéciaux de MOIST, votre future marque préférée.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[60px]">
                    <div className="flex flex-col gap-10">
                        <p className="text-[#F4CC81] text-sm">MOIST</p>
                        <div className="font-[Inter] font-medium flex flex-col gap-5">
                            <p>Notre histoire</p>
                            <p>Nos valeurs</p>
                            <p>Ambassadeurs</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className="text-[#F4CC81] text-sm">COLLECTIONS</p>
                        <div className="font-[Inter] font-medium flex flex-col gap-5">
                            <p>STELLAR</p>
                            <p>ORIGINS</p>
                            <p>ENERGY</p>
                            <p>MOIST+</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className="text-[#F4CC81] text-sm">NEWSLETTER</p>
                        <div className="font-[Inter] font-medium flex flex-col gap-5">
                            <input type="text" className=" w-[218px] h-[35px] bg-white placeholder:text-[#4F4F4F] placeholder:text-[10px] placeholder:ms-20" placeholder="Entrez votre adresse mail"/>
                            <p className="text-[8px] w-[217px]">En vous abonnant, vous consentez à recevoir des communications marketing de la part de MOIST via l&apos;adresse e-mail fournie. Le consentement pour recevoir des communications marketing n&apos;est pas requis pour effectuer un achat. Vous pouvez vous désabonner à tout moment en nous contactant ou en utilisant le lien de désinscription.
                                Consultez notre politique de confidentialité pour plus de détails.</p>
                            <div className="font-medium font-druk border-2 h-[38px] w-[127px] text-center inline-block align-middle">
                                <p>S&#39;ABONNER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ms-20 me-20 flex flex-col lg:flex-row justify-between mt-[287px] pb-10">
                <div>
                    <p className="font-[Inter] text-[12px]">© MOIST Drinks</p>
                </div>
                <div className="flex flex-col md:flex-row font-[Inter] text-[12px] gap-12">
                    <p>Plan du site</p>
                    <p>Cookies</p>
                    <p>Mentions légales</p>
                    <p>Conditions d&apos;utilisation</p>
                </div>
            </div>
        </div>
    )
}
