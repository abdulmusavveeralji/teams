import React from "react";
import { BsMicrosoftTeams } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Headers = () => {
  return (
    <header className="flex justify-between bg-[#1a1818] p-3">
      <div className="flex items-center">
        <BsMicrosoftTeams size={20} className="text-blue-500 mx-3" />

        <SlArrowLeft className="text-white mx-2" />
        <SlArrowRight className="text-white mx-2" />

        <div className="search flex items-center">
          <IoIosSearch className="text-white mx-3 absolute" />
          <input
            className="p-1 px-11 w-[35rem] rounded-md bg-[#2b2828] text-white outline-none"
            type="text"
            placeholder="Search (Ctrl + E)"
          />
        </div>
      </div>
      <div className="flex items-center mx-3">
        <HiDotsHorizontal className="text-white mx-3" />
        <button className="p-1 mx-3 rounded-full text-white bg-slate-500">
          AA
        </button>
      </div>
    </header>
  );
};

export default Headers;
