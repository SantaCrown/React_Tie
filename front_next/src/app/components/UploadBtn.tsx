'use client'

import { HiOutlineUpload } from "react-icons/hi";


const UploadBtn = () => {
    return (
        <div className="hover:bg-gray-100 active:bg-white bg-white px-[18px] py-[9px] rounded-md flex flex-row items-center justify-center gap-3 text-[14px] cursor-pointer">
            <HiOutlineUpload className="text-[#5469D4] font-bold" size={18}/>
            <p className="text-[#5469D4] font-bold">アップロード</p>
        </div>
    )
}

export default UploadBtn;