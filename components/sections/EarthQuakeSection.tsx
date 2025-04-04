import Image from "next/image";

export const HearthQuakeSection = () => {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#5D3E2C] flex flex-col">
            <div className="flex flex-col lg:flex-row pb-[100px]">
                <div className="lg:absolute flex flex-col font-druk mt-[130px] ms-10 text-4xl text-transparent [-webkit-text-stroke:1px_#8D8D8D] z-50 [-webkit-text-fill-color:#5D3E2C]
                sm:text-6xl sm:ms-20
                xl:text-7xl
                2xl:text-8xl">
                    <p>FAITES</p>
                    <p>-VOUS</p>
                    <p>TREMBLER</p>
                    <p>DE DELICE</p>
                </div>
                <div className="flex flex-col ms-10 me-10
                lg:ms-[610px] lg:z-10
                xl:ms-[750px]
                2xl:ms-[930px]">
                    <div className="text-[#F4CC81] mt-24 rounded-3xl h-[40px] content-center text-center border-2 border-solid">
                        <p>COLLECTION STELLAR</p>
                    </div>
                    <div className="text-white text-5xl md:text-7xl xl:text-8xl mt-8">
                        <p>EARTH</p>
                        <p>QUAKE</p>
                    </div>
                    <div>
                        <button className="text-[white] mt-[50px] rounded-3xl h-[40px] content-center text-center bg-[#F4CC81] w-auto p-2 hover:border-2 hover:border-solid hover:bg-transparent hover:text-[#F4CC81]">
                            PRE-COMMANDER
                        </button>
                    </div>
                    <div className="flex-col flex gap-10 mt-20">
                        <div className="w-auto xl:w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#F4CC81]">LA PUISSANCE DE LA NATURE</p>
                            <p className="text-[16px] text-white font-[Inter]" >Des saveurs venues tout droit des tréfonds de la Terre, Earth Quake rappelle toute la puissance de Dame Nature. Faites rugir le volcan qui est en vous !</p>
                        </div>

                        <div className="w-auto xl:w-[449px] flex flex-col gap-8">
                            <p className="font-druk font-bold text-[16px] text-[#F4CC81]">COMPOSITION</p>
                            <p className="text-[16px] text-white font-[Inter]" >Grains de cacao moulus, poire, agrumes, eau.
                                Certifié sans caféine, sans sucre ajouté.
                                Contient de la vitamine C.</p>
                        </div>
                    </div>
                    <div className="flex flex-row w-[300px] justify-between mt-20">
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
