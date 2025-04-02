import {CtaButton} from "@/components/buttons/CtaButton";
export const Hero = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-white flex flex-col">
            <div className="flex-1 flex items-center justify-center">
                <p className="text-6xl lg:text-9xl font-druk text-[#080606] z-40">MOIST</p>
            </div>
            <div className="px-8 md:px-32 pb-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="w-full lg:w-[40%]">
                        <p className="text-lg text-[#121316] font-[Inter] z-40">
                            La marque de soda qui va vous desalterer tout en vous offrant
                            des saveurs uniques au monde. Comme si vous degustiez un met
                            exquis dans un restaurant luxueux, appreciez la complexite des
                            aromes speciaux des boissons MOIST.
                        </p>
                    </div>
                    <div className="flex">
                        <CtaButton>
                            DECOUVRIR LA NOUVELLE COLLECTION
                        </CtaButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
