export const Hero = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-white flex flex-col">
            <div className="flex-1 flex items-center justify-center">
                <p className="text-9xl font-druk text-[#080606]">MOIST</p>
            </div>
            <div className="px-8 md:px-32 pb-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="w-full lg:w-[40%]">
                        <p className="text-lg text-[#121316] font-[Inter]">
                            La marque de soda qui va vous desalterer tout en vous offrant
                            des saveurs uniques au monde. Comme si vous degustiez un met
                            exquis dans un restaurant luxueux, appreciez la complexite des
                            aromes speciaux des boissons MOIST.
                        </p>
                    </div>
                    <div className="flex">
                        <div className="h-9 rounded-[40px] bg-[#F4CC81] text-black flex items-center px-5 font-[Inter] font-bold">
                            <p>DECOUVRIR LA NOUVELLE COLLECTION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
