'use client'

import React from "react";
interface SideBarProps {
    label: string;
    onClick: () => void;
    icon: React.ReactNode;
}

const SideBtn:React.FC<SideBarProps> = ({
    label,
    onClick,
    icon
}) => {
    return (
        <button onClick={onClick} className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg  hover:bg-white active:bg-white w-full flex items-center gap-4 px-2 ml-4 capitalize" type="button">
            {icon}
            <p className="block antialiased font-sans text-[#1A1F36] hover:font-bold text-[14px] leading-relaxed text-inherit font-medium capitalize">{label}</p>
        </button>
    )
}

export default SideBtn;