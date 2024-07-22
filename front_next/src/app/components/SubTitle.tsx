'use client'

interface SubTitleProps {
    order: string;
    label: string;
    sublabel: string;
}

const SubTitle: React.FC<SubTitleProps> = ({
    order,
    label,
    sublabel
}) => {
    return (
        <div className="mt-4 flex lg:flex-row flex-col gap-3 lg:items-center text-[#628CF8 ]">
            <div className="flex gap-2 items-center">
                <div className="w-8 h-8 bg-[#628CF8] rounded-full flex items-center justify-center text-[14px] font-bold text-white">
                    {order}
                </div>
                <p className="font-bold text-base">{label}</p>
            </div>
            <p className="text-[14px]">{sublabel}</p>
        </div>
    )
}

export default SubTitle;