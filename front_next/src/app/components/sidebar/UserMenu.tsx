'use client'

import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const UserMenu = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

    const handlelogin = () => {
        router.push('/login');
    }

    const handleregister = () => {
        router.push('/register');
    }

    return (
        <>
            <div onClick={toggleOpen} className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-blue-gray-500">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                    </svg>
                </span>
            </div>
            {isOpen && (
                <div
                    className='
                        absolute
                        rounded-md
                        shadow-lg
                        bg-[#F7FAFC]
                        overflow-hidden
                        md:right-8
                        top-14
                        text-sm
                        z-50
                        text-gray-900
                        '
                >
                    <div className='flex flex-col cursor-pointer'>
                        <MenuItem
                            onClick={handlelogin}
                            label='Log in'
                        />
                        <hr />
                        <MenuItem
                            onClick={handleregister}
                            label='Register'
                        />
                        <MenuItem
                            onClick={() => { }}
                            label='Payment'
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default UserMenu;