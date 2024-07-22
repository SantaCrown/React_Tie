'use client'

import TopBar from "../components/sidebar/TopBar";
import SideBar from "../components/sidebar/SideBar";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="min-h-screen bg-[url(/images/bg.png)] bg-cover bg-center bg-fixed">
      <SideBar showSidebar={showSidebar}/>
      <div className="p-4 xl:ml-[270px] relative">
        <FiAlignJustify onClick={toggleSidebar} className="absolute xl:hidden right-4" size={30} />
        <TopBar />
        {children}
      </div>
    </div>
  );
}
