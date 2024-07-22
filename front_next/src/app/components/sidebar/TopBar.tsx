'use client'

import Progress from "./Progress";


const TopBar = () => {
    return (
        <nav className="block w-full max-w-full bg-transparent text-[#1A1F36] shadow-none transition-all py-1">
            <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-3">
                <p className="text-[14px]">キーワード / キーワード生成</p>
                <div className="w-[130px] mr-10">
                    <Progress/>
                </div>
                {/* <div className="flex items-center justify-end">
                    <a href="#">
                        <UserMenu/>
                    </a>
                    <Setting/>
                    <Notification/>
                </div> */}
            </div>
        </nav>
    )
}

export default TopBar;