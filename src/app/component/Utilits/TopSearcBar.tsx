/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const TopSearcBar = ({ setSearch }: { setSearch: any }) => {
  return (
    <div className="lg:px-20 md:px-16 sm:px-12 px-10 relative">
      <div
        onClick={() => setSearch(false)}
        className="right-12 top-[-20px] absolute cursor-pointer hover:text-[#F57D4C] hover:scale-125 duration-300"
      >
        <p>
          <FaXmark />
        </p>
      </div>
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-[#262626]/80">
          What are you looking for?
        </h2>
      </div>
      <div className="mt-8">
        <form>
          <div className="flex items-center justify-between px-4 py-3 border border-[#262626]/40">
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search your products..."
            />
            <p>
              <IoSearchOutline></IoSearchOutline>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopSearcBar;
