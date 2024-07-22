'use client'

interface StepProps {
    end?: boolean;
}

const Step: React.FC<StepProps> = ({
    end
}) => {

    return (
        <ol className="flex items-center text-xs text-gray-900 font-medium sm:text-base">
            <li className="flex w-[300px] relative text-[#3BAAE2] after:content-['']  after:w-full after:h-0.5  after:bg-[#3BAAE2] after:inline-block after:absolute after:top-5 after:left-4">
                <div className="block whitespace-nowrap z-10">
                    <span className="w-10 h-10 bg-[#3BAAE2] border-2 border-transparent rounded-full flex justify-center items-center font-bold mx-auto mb-3 text-[16px] text-white">1</span> 記事生成
                </div>
            </li>
            <li className="flex w-full relative text-[#3BAAE2]">
                <div className="block  z-10">
                    <span className={`w-10 h-10  border-2 border-[#3BAAE2]  ${end ? 'bg-[#3BAAE2] text-white' : 'border-dashed bg-gray-50'} rounded-full flex font-bold justify-center items-center mx-auto mb-3 text-[16px]`}>2</span> 記事編集
                </div>
            </li>
        </ol>
    )
}

export default Step;


