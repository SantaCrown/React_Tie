'use client'

import { useState } from "react";

interface SubSettingProps {
    label: string,
    title: string,
    children: React.ReactNode;
}

const SubSetting: React.FC<SubSettingProps> = ({
    label,
    title,
    children
}) => {

    return (
        <div
            className="
                w-full
            "
        >
            <p className="text-base text-[#3BAAE2]">{label}</p>
            <p className="text-2xl font-bold text-[#171C61]">{title}</p>
            <hr className="my-3 border-b border-[#3BAAE2]"/>
            {children}
        </div>
    )
}

export default SubSetting;