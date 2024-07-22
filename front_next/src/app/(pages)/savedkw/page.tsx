'use client'

import DownloadBtn from "@/app/components/DownloadBtn";
import Button from "../../components/Button";
import Container from "../../components/Container";
import SavedKw from "../../components/SavedKw";
import Title from "../../components/Title";
import UploadBtn from "../../components/UploadBtn";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-5 relative">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-start gap-2">
          <Title label="保存キーワード"/>
          <div className="flex sm:flex-row flex-col sm:justify-center sm:gap-6 gap-2">
            <div className="flex sm:gap-6 sm:justify-center justify-between">
              <DownloadBtn/>
              <UploadBtn />
            </div>
            <div className="flex justify-end sm:justify-center">
              <Button onClick={() => {}} common label="キーワード保存"/>
            </div>
          </div>
        </div>
        <SavedKw/>
        <div className="flex justify-end">
          <Button onClick={() => {}} common label="キーワード保存"/>
        </div>
      </div>
    </Container>
  );
}
