import Image from "next/image";

export const HearthQuakeSection = () => {
    return (
        <div className="relative h-full w-screen overflow-hidden bg-[#5D3E2C] flex flex-col">
            <div className="flex flex-row pb-[100px]">
                <div className="flex flex-col text-8xl font-druk mt-[130px] ms-20">
                    <p>FAITES</p>
                    <p>-VOUS</p>
                    <p>TREMBLER</p>
                    <p>DE DELICE</p>
                </div>
                <div className="flex flex-col">
                    <div className="text-[#F4CC81] mt-24 rounded-3xl h-[40px] content-center text-center border-2 border-solid">
                        <p>COLLECTION STELLAR</p>
                    </div>
                    <div className="text-white text-8xl mt-8">
                        <p>EARTH</p>
                        <p>QUAKE</p>
                    </div>
                    <div className="text-[#121316] mt-[50px] rounded-3xl h-[40px] content-center text-center bg-[#F4CC81] w-auto">
                    <p className="text-white">PRE-COMMANDER</p>
                    </div>
                    <div className="flex-col flex gap-10 mt-20">
                        <div className="w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#F4CC81]">LA PUISSANCE DE LA NATURE</p>
                            <p className="text-[16px] text-white font-[Inter]" >Des saveurs venues tout droit des tréfonds de la Terre, Earth Quake rappelle toute la puissance de Dame Nature. Faites rugir le volcan qui est en vous !</p>
                        </div>

                        <div className="w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#F4CC81]">COMPOSITION</p>
                            <p className="text-[16px] text-white font-[Inter]" >Grains de cacao moulus, poire, agrumes, eau.
                                Certifié sans caféine, sans sucre ajouté.
                                Contient de la vitamine C.</p>
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
