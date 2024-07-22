'use client'

import Button from "./Button";
import { IoFilter } from "react-icons/io5";
import { FaEllipsisVertical } from "react-icons/fa6"
import { useCallback, useState } from "react";
import Filter from "./modals/Filter";

const SavedKw = () => {
    const [filterShow, setFilterShow] = useState(false);

    const toggleShow = useCallback(() => {
        setFilterShow(filterShow => !filterShow);
    }, [])
    return (
        <>
            <Filter onShow={filterShow} />
            <div className="overflow-x-auto relative rounded-xl">
                <table className="min-w-full">
                    <thead className="bg-white text-left p-2">
                        <tr>
                            <th className=" px-8 py-3 font-bold text-gray-900 text-xs text-left w-[4%]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </th>
                            <th className="whitespace-nowrap px-8 py-2">
                                <div className="flex flex-row gap-3">
                                    <p className="font-bold text-gray-900 text-xs">キーワード</p>
                                    <IoFilter onClick={toggleShow} className="cursor-pointer" />

                                </div>
                            </th>
                            <th className="whitespace-nowrap px-8 py-2">
                                <div className="flex flex-row gap-3">
                                    <p className="font-bold text-gray-900 text-xs">ボリューム</p>
                                    <IoFilter />
                                </div>
                            </th>
                            <th className="whitespace-nowrap px-8 py-2  text-left">
                                <div className="flex flex-row gap-3">
                                    <p className="font-bold text-gray-900 text-xs">記事生成ステータス</p>
                                    <IoFilter />
                                </div>
                            </th>
                            <th className="whitespace-nowrap py-2 font-bold text-gray-900 text-xs text-left"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-gray-100">
                        <tr>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="whitespace-nowrap py-2">
                                <Button onClick={() => {}} outline label="未生成" />
                            </td>
                            <td className="whitespace-nowrap py-2 ml-8">
                                <div className="flex justify-around items-center">
                                    <Button onClick={() => {}} common label="記事生成" />
                                    <FaEllipsisVertical size={20} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="whitespace-nowrap py-2">
                                <Button onClick={() => {}} outline label="未生成" />
                            </td>
                            <td className="whitespace-nowrap py-2 ml-8">
                                <div className="flex justify-around items-center">
                                    <Button onClick={() => {}} common label="記事生成" />
                                    <FaEllipsisVertical size={20} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="whitespace-nowrap py-2">
                                <Button onClick={() => {}} outline label="未生成" />
                            </td>
                            <td className="whitespace-nowrap py-2 ml-8">
                                <div className="flex justify-around items-center">
                                    <Button onClick={() => {}} common label="記事生成" />
                                    <FaEllipsisVertical size={20} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="whitespace-nowrap py-2">
                                <Button onClick={() => {}} outline label="未生成" />
                            </td>
                            <td className="whitespace-nowrap py-2 ml-8">
                                <div className="flex justify-around items-center">
                                    <Button onClick={() => {}} common label="記事生成" />
                                    <FaEllipsisVertical size={20} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">
                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Name</td>
                            <td className="whitespace-nowrap px-8 py-2 font-medium text-gray-900 text-[14px]">Date of Birtd</td>
                            <td className="whitespace-nowrap py-2">
                                <Button onClick={() => {}} outline label="未生成" />
                            </td>
                            <td className="py-2 ml-8">
                                <div className="flex justify-around items-center">
                                    <Button onClick={() => {}} common label="記事生成" />
                                    <FaEllipsisVertical size={20} />
                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SavedKw;