import Image from "next/image";

export const MoonDropSection = () => {
    return (
        <div className="relative h-full w-screen overflow-hidden bg-[#9FAAC3] flex flex-col">
            <div className="flex flex-row pb-[100px]">
                <div className="flex flex-col text-8xl font-druk mt-[130px] ms-20">
                    <p>LA LUNE</p>
                    <p>A LA PORTEE</p>
                    <p>DE LA LANGUE</p>
                </div>
                <div className="flex flex-col">
                    <div className="text-[#121316] mt-24 rounded-3xl h-[40px] content-center text-center border-2 border-solid">
                        <p>COLLECTION STELLAR</p>
                    </div>
                    <div className="text-[#121316] text-8xl mt-8">
                        <p>MOON</p>
                        <p>DROP</p>
                    </div>
                    <div className="text-[#121316] mt-[50px] rounded-3xl h-[40px] content-center text-center bg-[#F4CC81] w-auto">
                    <p className="text-[#121316]">PRE-COMMANDER</p>
                    </div>
                    <div className="flex-col flex gap-10 mt-20">
                        <div className="w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#121316]">UNE FRAICHEUR LUNAIRE</p>
                            <p className="text-[16px] text-[#121316] font-[Inter]" >
                                Faites voyager vos papilles jusqu’à la lune grâce à la saveur Moon Drop. Un départ pétillant qui laisse place à un froid glaciaire pour vous rafraîchir à tous les coups.
                            </p>
                        </div>

                        <div className="w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#121316]">COMPOSITION</p>
                            <p className="text-[16px] text-[#121316] font-[Inter]" >Extraits de menthe glaciale, citron, eau gazéifiée.
                                Certifié sans caféine, sans sucre ajouté.
                                Contient de la vitamine C.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-[185px] justify-between mt-20">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
