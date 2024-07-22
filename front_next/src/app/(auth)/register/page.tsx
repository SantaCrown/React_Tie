'use client'

import RegisterModal from "@/app/components/modals/RegisterModal";

export default function Home() {
  return (
    <div className="min-h-screen flex xl:flex-row flex-col items-center xl:gap-[80px] gap-[10px] justify-center">
      <div className="flex flex-col ">
        <p className="font-bold xl:text-[28px] text-[#1A1F36]">LOGO</p>
        <h1 className="font-bold xl:text-[64px] text-[32px] text-[#1A1F36]">Develop your SEO</h1>
      </div>
      <RegisterModal/>
    </div>
  );
}
