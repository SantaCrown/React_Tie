'use client'

interface ButtonProps {
    label: string;
    roundBtn?: boolean;
    outline?: boolean;
    signInOutBtn?: boolean;
    common?: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    common,
    roundBtn,
    outline,
    signInOutBtn,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                    py-[12px]
                    text-[14px]
                    leading-[14px]
                    h-fit
                    font-bold
                    ${common ? 'px-[18px] text-white' : ''}
                    ${outline ? 'px-[18px] border-[1px] border-gray-400 bg-white text-center text-gray-900' : 'bg-[#5469D4]'}
                    ${signInOutBtn ? 'w-full hover:bg-[#5469D4]/80 active:bg-[#5469D4]/50 bg-[#5469D4] text-center text-white' : 'bg-[#5469D4]'}
                    ${roundBtn ? 'bg-white hover:bg-[#3BAAE2]/10 active:bg-[#3BAAE2]/50 border-[1px] border-[#3BAAE2] rounded-full px-[24px] py-[8px] text-[#3DAAE2] font-bold text-[14px]' : 'bg-[#5469D4] hover:bg-[#5469D4]/80 active:bg-[#5469D4]/50 rounded-md'}
                `}
        >
            {label}
        </button>
    )
}

export default Button;