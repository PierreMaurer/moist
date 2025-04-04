export const Footer = () => {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#121316] flex flex-col z-50">
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
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">Notre histoire</a>
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">Nos valeurs</a>
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">Ambassadeurs</a>
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">FAQ</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className="text-[#F4CC81] text-sm">COLLECTIONS</p>
                        <div className="font-[Inter] font-medium flex flex-col gap-5">
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">STELLAR</a>
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">ORIGINS</a>
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">ENERGY</a>
                            <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">MOIST+</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className="text-[#F4CC81] text-sm">NEWSLETTER</p>
                        <div className="font-[Inter] font-medium flex flex-col gap-5">
                            <input type="text" className="w-[218px] h-[35px] bg-white placeholder:text-[#4F4F4F] placeholder:ps-2 placeholder:text-[10px]" placeholder="Entrez votre adresse mail"/>
                            <p className="text-[8px] w-[217px]">En vous abonnant, vous consentez à recevoir des communications marketing de la part de MOIST via l&apos;adresse e-mail fournie. Le consentement pour recevoir des communications marketing n&apos;est pas requis pour effectuer un achat. Vous pouvez vous désabonner à tout moment en nous contactant ou en utilisant le lien de désinscription.
                                Consultez notre politique de confidentialité pour plus de détails.</p>
                            <button className="font-medium font-druk border-2 h-[38px] w-[127px] content-center text-center hover:bg-[#F4CC81] hover:text-[#121316] transition-colors duration-200 flex items-center justify-center">
                                S&#39;ABONNER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ms-20 me-20 flex flex-col lg:flex-row justify-between mt-[287px] pb-10">
                <div>
                    <p className="font-[Inter] text-[12px]">© MOIST Drinks</p>
                </div>
                <div className="flex flex-col md:flex-row font-[Inter] text-[12px] gap-12">
                    <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">Plan du site</a>
                    <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">Cookies</a>
                    <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">Mentions légales</a>
                    <a href="#" className="hover:text-[#F4CC81] transition-colors duration-200">Conditions d&apos;utilisation</a>
                </div>
            </div>
        </div>
    )
}
