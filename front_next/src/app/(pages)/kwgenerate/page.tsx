'use client'

import SubTitle from "@/app/components/SubTitle";
import Button from "../../components/Button";
import Container from "../../components/Container";
import KwInput from "../../components/KwInput";
import KwTable from "../../components/KwTable";
import Title from "../../components/Title";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-5">
        <div>
          <Title label="キーワード生成"/> 
          <SubTitle order="1" label="キーワードを生成しましょう" sublabel="説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト"/>
        </div>
        <KwInput/>
        <SubTitle order="2" label="キーワードを選んでください" sublabel="説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト"/>
        <KwTable/>
      </div>
    </Container>
  );
}