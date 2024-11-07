import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { MdSell } from "react-icons/md";
import { SiBigcartel } from "react-icons/si";

const ProjectManagementCards = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div className="bg-[#fff]  rounded px-4 py-6 border-b-2 border-[#006666] hover:translate-y-[-8px] cursor-pointer duration-300">
        <h2 className="text-[#262626]/70 text-sm">Total Products</h2>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-semibold">1205</p>
          <p className="p-2 bg-[#B2D1D1] text-xl text-[#006666] rounded">
            <AiFillProduct />
          </p>
        </div>
      </div>

      <div className="bg-[#fff]  rounded px-4 py-6 border-b-2 border-[#FFAE1A] hover:translate-y-[-8px] cursor-pointer duration-300">
        <h2 className="text-[#262626]/70 text-sm">Sells Products</h2>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-semibold">605</p>
          <p className="p-2 bg-[#FFE7BA] text-xl text-[#FFAE1A] rounded">
            <MdSell />
          </p>
        </div>
      </div>

      <div className="bg-[#fff]  rounded px-4 py-6 border-b-2 border-[#FF8367] hover:translate-y-[-8px] cursor-pointer duration-300">
        <h2 className="text-[#262626]/70 text-sm">Buy Products</h2>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-semibold">205</p>
          <p className="p-2 bg-[#FFD2C8] text-xl text-[#FF8367] rounded">
            <SiBigcartel />
          </p>
        </div>
      </div>

      <div className="bg-[#fff]  rounded px-4 py-6 border-b-2 border-[#838D99] hover:translate-y-[-8px] cursor-pointer duration-300">
        <h2 className="text-[#262626]/70 text-sm">Completed Payments</h2>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-semibold">108</p>
          <p className="p-2 bg-[#838D99] text-xl text-[#fff] rounded">
            <SiBigcartel />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementCards;
