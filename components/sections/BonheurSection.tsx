import Image from "next/image";

export const BohneurSection = () => {
    return (
        <div className="relative h-full w-screen overflow-hidden bg-[#121316] flex flex-col">
            <div className="relative w-full flex flex-col lg:flex-row">
                <div className="lg:absolute ms-20 lg:ms-[700px] mt-[100px] top-[100px] lg:left-20 lg:z-10 font-druk">
                    <p className="text-[#F4CC81] text-6xl">DES BULLES</p>
                    <p className="text-[#F4CC81] text-6xl">DE BONHEUR</p>
                </div>
                <div className="ms-20 w-[926px] mt-[100px] flex flex-col gap-4 font-druk">
                    <p className="text-8xl">DES SAVEURS</p>
                    <p className="text-8xl">UNIQUES</p>
                    <p className="text-8xl">SUR TERRE</p>
                </div>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row justify-between">
                <div className="ms-20">
                    <Image
                        src={"/image/bubble.png"}
                        alt={"oui"}
                        width={"491"}
                        height={"546"}
                    />
                </div>
                <div className="flex flex-col gap-24 me-[252px]">
                    <div className="w-[449px] flex flex-col gap-8">
                        <p className="text-[16px] text-[#F4CC81] font-medium">DES INGREDIENTS 100% NATURELS</p>
                        <p className="text-[16px] font-[Inter]">Nous tenons particulièrement à ce que toutes nos boissons soient composés des ingrédients les plus purs possibles.
                            Pas d’additif, pas d’édulcorant, pas de colorant artificiels,
                            que des saveurs extraites à la pulpe de la terre.</p>
                    </div>
                    <div className="w-[449px] flex flex-col gap-8">
                        <p className="text-[16px] text-[#F4CC81] font-medium">MADE IN FRANCE. C’EST TOUT.</p>
                        <p className="text-[16px] font-[Inter]">De nos fournisseurs à nos usines, nous choisissons précautionneusement nos partenaires en France pour une confection qui ne dépasse jamais nos frontières.</p>
                    </div>
                </div>
            </div>
            <div className="pb-32">
                <div className="text-8xl ms-20 mt-[150px] font-druk">
                    <p>UNE</p>
                    <p>NOUVELLE</p>
                    <p>COLLECTION</p>
                </div>
            </div>
        </div>
    )
}
