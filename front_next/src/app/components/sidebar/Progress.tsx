import React from 'react';

const Progress = () => {
    return (
        <div className='flex flex-col gap-1'>
            <p className='text-[14px]'>残クレジット：8</p>
            <div className="h-3 w-full bg-neutral-200 dark:bg-neutral-600">
                <div className="h-3 bg-[#628CF8]" style={{ width: "45%" }}></div>
            </div>
        </div>
    );
}

export default Progress;