import Image from "next/image";

export const BohneurSection = () => {
    return (
        <div className="relative h-full w-screen overflow-hidden bg-[#121316] flex flex-col">
            <div className="relative w-full flex flex-col md:flex-row">
                <div className="ms-10 mt-[100px] font-druk text-4xl
                md:absolute md:ms-[350px] md:top-[50px] md:text-4xl
                lg:ms-[630px] lg:top-[100px] lg:left-20 lg:z-10 lg:text-4xl
                xl:text-6xl">
                    <p className="text-[#F4CC81]">DES BULLES</p>
                    <p className="text-[#F4CC81]">DE BONHEUR</p>
                </div>
                <div className="ms-7 mt-[100px] flex flex-col gap-4 font-druk text-5xl text-transparent [-webkit-text-stroke:1px_#808080]
                md:text-5xl
                lg:ms-20 lg:w-[926px] lg:text-8xl">
                    <p>DES SAVEURS</p>
                    <p>UNIQUES</p>
                    <p>SUR TERRE</p>
                </div>
            </div>
            <div className="flex flex-col gap-8 justify-between mt-5 lg:mt-0 lg:flex-row">
                <div className="ms-7 me-7
                lg:me-0 lg:ms-20">
                    <Image
                        src={"/image/bubble.png"}
                        alt={"oui"}
                        width={"491"}
                        height={"546"}
                    />
                </div>
                <div className="ms-5 me-5 flex flex-col gap-24 xl:me-[100px] 2xl:me-[252px]">
                    <div className="w-auto lg:w-[449px] flex flex-col gap-8">
                        <p className="text-[16px] text-[#F4CC81] font-medium">DES INGREDIENTS 100% NATURELS</p>
                        <p className="text-[16px] font-[Inter]">Nous tenons particulièrement à ce que toutes nos boissons soient composés des ingrédients les plus purs possibles.
                            Pas d’additif, pas d’édulcorant, pas de colorant artificiels,
                            que des saveurs extraites à la pulpe de la terre.</p>
                    </div>
                    <div className="w-auto lg:w-[449px] flex flex-col gap-8">
                        <p className="text-[16px] text-[#F4CC81] font-medium">MADE IN FRANCE. C’EST TOUT.</p>
                        <p className="text-[16px] font-[Inter]">De nos fournisseurs à nos usines, nous choisissons précautionneusement nos partenaires en France pour une confection qui ne dépasse jamais nos frontières.</p>
                    </div>
                </div>
            </div>
            <div className="pb-32 z-50">
                <div className="text-4xl ms-5 lg:ms-20 mt-[150px] font-druk text-transparent [-webkit-text-stroke:1px_#808080] z-50
                md:text-7xl
                lg:text-8xl">
                    <p>UNE</p>
                    <p>NOUVELLE</p>
                    <p>COLLECTION</p>
                </div>
            </div>
        </div>
    )
}
