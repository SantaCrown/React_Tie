'use client'

import Button from "./Button";


const KwTable = () => {
    return (
        <form className="w-full flex flex-col gap-5">
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full">
                    <thead className="bg-white text-left p-2">
                        <tr>
                            <th className="whitespace-nowrap px-8 py-3 font-bold text-gray-900 text-xs text-left w-[4%]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </th>
                            <th className="whitespace-nowrap px-8 py-3 w-[40%] font-bold text-gray-900 text-xs text-left">キーワード</th>
                            <th className="whitespace-nowrap px-8 py-3 w-[20%] font-bold text-gray-900 text-xs text-left">ボリューム</th>
                            <th className="whitespace-nowrap py-3 w-[36%] font-bold text-gray-900 text-xs text-left">ステータス</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-gray-100">
                        <tr>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="py-1">
                                <Button onClick={() => { }} outline label="未生成" />
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="py-1">
                                <Button onClick={() => { }} outline label="未生成" />
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="py-1">
                                <Button onClick={() => { }} outline label="未生成" />
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-1 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="py-2">
                                <Button onClick={() => { }} outline label="未生成" />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <Button common onClick={() => { }} label="生成する" />
            </div>
        </form>

    )
}

export default KwTable;