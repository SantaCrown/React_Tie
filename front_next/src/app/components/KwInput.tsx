'use client'

import Button from "./Button";

const KwInput = () => {

    return (
        <form className="w-full flex flex-col gap-5">
            <textarea className="p-6 block w-full h-[200px] border-gray-200 rounded-xl text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-300 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-100" placeholder="Input keyword." />
            <div className="flex justify-end">
                <Button common onClick={() => { }} label="生成する" />
            </div>
        </form>
    )
}

export default KwInput;