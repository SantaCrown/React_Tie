'use client'

import { HiOutlineDownload } from "react-icons/hi";


const DownloadBtn = () => {
    return (
        <div className="bg-white px-[18px] py-[9px] rounded-md flex flex-row items-center justify-center gap-3 text-[14px] cursor-pointer hover:bg-gray-100 active:bg-white">
            <HiOutlineDownload className="text-[#5469D4] font-bold" size={18}/>
            <p className="text-[#5469D4] font-bold">ダウンロード</p>
        </div>
    )
}

export default DownloadBtn;