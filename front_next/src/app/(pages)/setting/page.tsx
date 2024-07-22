'use client'

import Title from "@/app/components/Title";
import Container from "../../components/Container";
import Step from "@/app/components/Step";
import SubSetting from "@/app/components/SubSetting";
import KeyWordShow from "@/app/components/subkwset/keywordis";
import SubKwSetting from "@/app/components/subkwset/subkwset";
import Button from "@/app/components/Button";
import GptTitle from "@/app/components/subkwset/GptTitle";
import FinalSet from "@/app/components/subkwset/FinalSet"
import Config from "@/app/components/subkwset/Config";
import { useRouter } from "next/navigation";
import TitleEdit from "../../components/subkwset/TitleEdit";
import { useState } from "react";
import TitleContainer from "../../components/subkwset/TitleContainer";
import ConfigList from "../../components/subkwset/ConfigList";
import SubTitle from "@/app/components/SubTitle";

export default function Home() {
  const subKeywords = [
    "keywrd", "keywrd", "keydsaawrd", "keywrd",
    "kedsafsdafdsywrd", "keywrd", "keywrd", "kesadfdsafywrd",
    "keywrd", "keywrd", "kesadfdsafywrd",
    "keywrd", "keywasdfdsrd", "ksadfdsd", "keywrd", "keywrdsfdsd",
  ]

  const configdes = [
    "テキストテキストテキストテキスト",
    "テキストテキストテキスト",
    "テキストテキストテキストテキストテキスト",
    "テキストテキスト"
  ]


  const route = useRouter();

  const handlearticleend = () => {
    route.push('/setting/article-end')
  }

  return (
    <Container>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 sm:gap-20 flex-col sm:flex-row">
          <Title label="記事生成" />
          <Step />
        </div>
        <SubTitle order="1" label="サブキーワードを設定してください" sublabel=""/>
          <KeyWordShow />
          <form action="" className="mt-4 ">
            <div className="text-[#252936]">
              <p className="text-[14px] mb-2 font-medium">サブキーワード</p>
              <div className="bg-[#F5F8F8] w-full p-6 rounded-lg">
                <div className="flex flex-wrap gap-4">
                  {subKeywords.map((keyword, index) => (
                    <SubKwSetting
                      key={index}
                      label={keyword}
                    />
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <input type="text" className="w-full sm:w-[350px] h-[50px] p-[12px] text-base border-2 rounded-lg" />
                  <button className="text-[14px] text-[#5469D4] min-w-max">追加する</button>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row items-center sm:justify-start gap-4 flex-col justify-center my-4">
              <Button onClick={() => { }} common label="タイトルを生成する（3/3）" />
              <p className="text-[14px]">※生成は３回までです。</p>
            </div>
          </form>
        <SubTitle order="2" label="タイトルを設定してください" sublabel=""/>
          <form action="" className="text-[#3C4257]">
            <p className="text-[14px] mb-3 font-medium">タイトル案</p>
            <TitleContainer />
            <div className="flex sm:flex-row items-center sm:justify-start gap-4 flex-col justify-center my-4">
              <Button onClick={() => { }} common label="タイトルを生成する（3/3）" />
              <p className="text-[14px]">※生成は３回までです。</p>
            </div>
          </form>
        <SubTitle order="3" label="記事構成を作成してください" sublabel=""/>
          <div className="flex sm:flex-row flex-col">
            <FinalSet
              keyword="シミが消える化粧品ランキング"
              subkeyword="アットコスメ"
              title="シミが消える？〜〜〜〜〜"
            />
            <div className="w-full sm:pl-4 mt-4 sm:mt-0">
              <p className="text-[14px] mb-4">記事構成</p>
              <div className="overflow-x-auto">
                <table className="divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className=" bg-gray-200 text-left">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2  font-bold text-gray-900 text-xs text-left">導入文</th>
                      <th className="whitespace-nowrap px-4 py-2  h-fit font-bold text-gray-900 text-xs text-left">リード文</th>
                      <th className="whitespace-nowrap px-4 py-2 w-full font-bold text-gray-900 text-xs text-left"></th>
                    </tr>
                  </thead>
                </table>
                <ConfigList />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row items-center sm:justify-start gap-4 flex-col justify-center my-4">
            <Button onClick={handlearticleend} common label="記事を生成する" />
          </div>
      </div>
    </Container>
  );
}
