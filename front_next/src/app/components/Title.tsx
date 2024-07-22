'use client'

interface TitleProps {
    label: string;
}

const Title: React.FC<TitleProps> = ({
    label,
}) => {
    return (
        <div
            className="
                text-[24px]
                font-bold
            "
        >
            {label}
        </div>
    )
}

export default Title;