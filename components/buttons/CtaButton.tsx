import {ReactNode} from "react";

export const CtaButton = ({children}: {children: ReactNode}) => {
    return (
        <button className="font-[Inter] font-bold bg-[#F4CC81] text-black h-auto p-1 rounded-[40px]">
            {children}
        </button>
    )
}
