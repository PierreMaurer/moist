import Image from "next/image";

export const SolarBurnSection = () => {
    return (
        <div className="relative h-full w-screen overflow-hidden bg-[#F4CC81] flex flex-col">
            <div className="flex flex-row pb-[100px]">
                <div className="flex flex-col text-8xl font-druk mt-[130px] ms-20">
                    <p>FAITES</p>
                    <p>DECOUVRIR</p>
                    <p>LE SOLEIL</p>
                    <p>A VOS</p>
                    <p>PAPILLES</p>
                </div>
                <div className="flex flex-col">
                    <div className="text-[#121316] mt-24 rounded-3xl h-[40px] content-center text-center border-2 border-solid">
                        <p>COLLECTION STELLAR</p>
                    </div>
                    <div className="text-[#121316] text-8xl mt-8">
                        <p>SOLAR</p>
                        <p>BURN</p>
                    </div>
                    <div className="text-[#121316] mt-[50px] rounded-3xl h-[40px] content-center text-center bg-[#121316] w-auto">
                    <p className="text-[#F4CC81]">PRE-COMMANDER</p>
                    </div>
                    <div className="flex-col flex gap-10 mt-20">
                        <div className="w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#121316]">UNE SAVEUR BRULANTE</p>
                            <p className="text-[16px] text-[#121316] font-[Inter]" >Pour tous les amateurs de piquant, les mangeurs de têtes brulées ou tout simplement pour ceux en recherche de sensations fortes, Solar Burn est pour vous.</p>
                        </div>

                        <div className="w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#121316]">COMPOSITION</p>
                            <p className="text-[16px] text-[#121316] font-[Inter]" >Extraits de gingembre, citron, orange, eau gazéifiée.
                                Certifié sans caféine, sans sucre ajouté.
                                Contient des vitamines B4 et B6.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-[300px] justify-between mt-20">
                        <Image
                            src={"/image/PR-icon-5-Antioxidants_6.png"}
                            alt={"antioxidant"}
                            width={69.3}
                            height={73}/>
                        <Image
                            src={"/image/PR-icon-2-Caffeine_73.png"}
                            alt={"antioxidant"}
                            width={69.3}
                            height={73}/>
                        <Image
                            src={"/image/B_Vitamins_40659a63-7e1a-49c3-ad3b-45f1b8136926.png"}
                            alt={"antioxidant"}
                            width={69.3}
                            height={73}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
