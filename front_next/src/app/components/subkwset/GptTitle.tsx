'use client'

import React from "react";

interface GptTitleProps {
    label: string;
    onTitleClick: (text: string) => void;
}

const GptTitle: React.FC<GptTitleProps> = ({
    label,
    onTitleClick
}) => {
    return (
        <div 
            onClick={() => onTitleClick(label)} 
            className="text-base cursor-pointer py-2 px-3 hover:w-fit hover:bg-gray-200 active:bg-gray-300 hover:rounded-lg"
        >
            {label}
        </div>
    )
}

export default GptTitle;
