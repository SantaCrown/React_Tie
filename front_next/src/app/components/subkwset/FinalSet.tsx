'use client'

interface FinalSetProps {
    keyword: string;
    subkeyword: string; ///array..
    title: string;
}

const FinalSet: React.FC<FinalSetProps> = ({
    keyword,
    subkeyword,
    title
}) => {
    return (
        <div className="bg-[#F5F8F8] p-4 flex flex-col gap-5 sm:w-[382px] w-full rounded-lg">
            <div className="flex flex-col gap-3 w-full">
                <p className="text-[14px]">キーワード</p>
                <div className="w-full bg-white sm:w-[350px] h-[50px] p-[12px] text-base border-2 rounded-lg">
                    {keyword}
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
                <p className="text-[14px]">サブキーワード</p>
                <div className="w-full bg-white sm:w-[350px] h-[50px] p-[12px] text-base border-2 rounded-lg">
                    {subkeyword}
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
                <p className="text-[14px]">記事タイトル</p>
                <div className="w-full bg-white sm:w-[350px] h-[50px] p-[12px] text-base border-2 rounded-lg">
                    {title}
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
                <p className="text-[14px]">カテゴリ</p>
                <input type="text" className="w-full sm:w-[350px] h-[50px] p-[12px] text-base border-2 rounded-lg" placeholder="カテゴリーを入力してください"/>
            </div>
        </div>
    )
}

export default FinalSet;