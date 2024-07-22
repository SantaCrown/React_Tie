'use client'

interface SubKwSettingProps {
    label: string;
}

const SubKwSetting: React.FC<SubKwSettingProps> = ({
    label
}) => {
    return (
        <div className="flex flex-row gap-1">
            <input type="checkbox" />
            <p className="text-base w-[120px]">{label}</p>
        </div>
    )
}

export default SubKwSetting;