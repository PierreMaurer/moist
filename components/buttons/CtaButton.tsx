import {ReactNode} from "react";

export const CtaButton = ({children}: {children: ReactNode}) => {
    return (
        <button className="font-[Inter] font-bold bg-[#F4CC81] text-black h-auto h-9 p-2 rounded-[40px] z-50 hover:text-[#F4CC81] hover:border-2 hover:border-solid hover:bg-transparent">
            {children}
        </button>

    )
}
