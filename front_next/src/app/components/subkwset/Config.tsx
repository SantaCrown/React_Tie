'use client'

import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa"
import InputWindow from "./InputWindow";
import SelectTag from "./SelectTag";

const Config = ({ dragHandleProps }) => {
    const [isActive, setIsActive] = useState(false);
    const handleActivate = () => {
        setIsActive(true);
    };
    const handleSave = (content: string) => {
        console.log('Saving content:', content);
        setIsActive(false);
        // Here you would typically send the content to your backend
    };
    return (
        <tr className="cursor-pointer" {...dragHandleProps}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-[14px]">
                <SelectTag />
            </td>
            <td className="w-[500px] px-4 py-2 font-medium text-gray-900 text-[14px]">
                <InputWindow
                    isActive={isActive}
                    onSave={handleSave}
                />
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-[14px]">
                <FaPencilAlt onClick={handleActivate} className="cursor-pointer" />
            </td>
        </tr>
    )
}

export default Config;
