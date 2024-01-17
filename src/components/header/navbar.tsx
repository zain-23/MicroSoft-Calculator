"use client";
import { RxCross2 } from "react-icons/rx";
import { VscChromeMaximize } from "react-icons/vsc";
import { LuAlignJustify } from "react-icons/lu";
import { Sidebar } from "../utils/sidebar";
import { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <nav className="">
      <div className="flex justify-between items-center h-8">
        <div className="flex items-center pl-2 gap-x-4">
          <img
            src="./Windows_Calculator_icon.png"
            className="w-4 h-full"
            alt=""
          />
          <h4 className="">Calulator</h4>
        </div>
        <div className="flex h-full">
          <div className="w-10 flex justify-center items-center">
            <VscChromeMaximize className="text-xl" />
          </div>
          <div className="w-10 flex justify-center items-center hover:bg-red-600">
            <RxCross2 className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex gap-x-1 items-center h-10 relative">
        <div
          className="hover:bg-[var(--hover-color)] w-8 h-8 rounded-sm flex justify-center items-center z-[2]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <LuAlignJustify />
        </div>
        <h2 className="text-xl">Standard</h2>
        <Sidebar sidebarOpen={sidebarOpen}/>
      </div>
    </nav>
  );
};

export default Navbar;
