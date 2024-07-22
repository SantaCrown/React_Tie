'use client'

import React, { useState } from "react";
import GptTitle from "./GptTitle";
import TitleEdit from "./TitleEdit";

const TitleContainer: React.FC = () => {
    const chatGptTitle = [
        "1．タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案",
        "2．タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案",
        "3．タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案",
        "4．タイトル案タイトル案タイトル案タイトル案タイトル案タイトル案",
    ]
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <div>
            <div className="bg-[#F5F8F8] p-6 rounded-lg">
                <div className="flex flex-col gap-4">
                    {chatGptTitle.map((keyword, index) => (
                        <GptTitle
                            key={index}
                            label={keyword}
                            onTitleClick={setInputValue}
                        />
                    ))}
                </div>
            </div>
            <TitleEdit inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}

export default TitleContainer;
