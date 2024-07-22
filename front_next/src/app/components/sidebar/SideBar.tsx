'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideBtn from "../SideBtn";
import { CiPen } from "react-icons/ci";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { VscListUnordered } from "react-icons/vsc";
import { FaCrown } from "react-icons/fa6";
import Avatar from "./Avatar";
import Progress from "./Progress";

interface SideBarProps {
    showSidebar?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({
    showSidebar
}) => {
    const router = useRouter();

    const handlekwgenerate = () => {
        router.push('/kwgenerate')
    }
    const handlesavedkw = () => {
        router.push('/savedkw')
    }
    const handlesetting = () => {
        router.push('/setting')
    }

    return (
        <>
            <aside className={`flex top-0 left-0 flex-col justify-between fixed z-50 h-full w-[300px] transition-transform duration-300 translate-x-0 sm:bg-transparent"}`}>
                <div className="hidden xl:block">
                    <div className="relative">
                        <a className="flex items-center gap-4 py-6 px-8" href="#/">
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#1A1F36]">Logo</h6>
                        </a>
                    </div>
                    <div className="m-4">
                        <ul className="flex flex-col mb-4">
                            <li>
                                <li className="mx-3.5 mb-4">
                                    <p className="block antialiased font-sans text-[16px] leading-normal text-[#1A1F36]  font-black uppercase opacity-75">キーワード</p>
                                </li>
                            </li>
                            <li>
                                <SideBtn icon={<CiPen size={24} />} onClick={handlekwgenerate} label="キーワード生成" />
                            </li>
                            <li>
                                <SideBtn icon={<AiOutlineSave size={24} />} onClick={handlesavedkw} label="保存キーワード" />
                            </li>
                        </ul>
                        <ul className="flex flex-col mb-4">
                            <li>
                                <li className="mx-3.5 mb-4">
                                    <p className="block antialiased font-sans text-[16px] leading-normal text-[#1A1F36]  font-black uppercase opacity-75">記 事</p>
                                </li>
                            </li>
                            <li>
                                <SideBtn icon={<HiOutlineCommandLine size={24} />} onClick={handlesetting} label="記事生成" />
                            </li>
                            <li>
                                <SideBtn icon={<VscListUnordered size={24} />} onClick={() => { }} label="保存した記事" />
                            </li>
                        </ul>
                        <ul className="flex flex-col">
                            <li>
                                <li className="mx-3.5 mb-4">
                                    <p className="block antialiased font-sans text-[16px] leading-normal text-[#1A1F36]  font-black uppercase opacity-75">設 定</p>
                                </li>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <SideBtn icon={<CiSettings size={24} />} onClick={() => { }} label="API連携" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div  className="hidden xl:block">
                    <div className="flex flex-col pl-8 gap-4 mb-6">
                        <div className="p-4 bg-white rounded-[12px] flex flex-col gap-6">
                            <p className="text-base font-bold">スタータープラン</p>
                            <Progress />
                            <button
                                type="button"
                                className="w-full font-bold flex justify-center gap-1 items-center py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#628CF8] hover:bg-[#9cb6f8] active:bg-[#628CF8] focus:outline-none"
                            >
                                <p>アップグレード</p>
                                <FaCrown size={20} color="yellow" />
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar />
                            <div className="flex flex-col items-center justify-between">
                                <p className="text-base">NAMENAMENAME</p>
                                <p className="text-[14px]">example@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar;