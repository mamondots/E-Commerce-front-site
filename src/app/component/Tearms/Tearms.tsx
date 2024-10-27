import React from "react";
import { FiTruck } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";

const Tearms = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      <div className="flex items-center justify-center flex-col text-center">
        <div className="bg-[#fff] p-8 rounded-full">
          <p className="text-2xl text-[#F57D4C]">
            <FiTruck />
          </p>
        </div>
        <div>
          <h2 className="mt-4 font-semibold">FAST SHIPPING</h2>
          <p className="mt-2 text-[#262626]/60">
            Free Shipping starts now! No minimums. No coupon required.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col text-center">
        <div className="bg-[#fff] p-8 rounded-full">
          <p className="text-2xl text-[#F57D4C]">
            <LuRefreshCcw />
          </p>
        </div>
        <div>
          <h2 className="mt-4 font-semibold">EASY RETURNS</h2>
          <p className="mt-2 text-[#262626]/60">
            Do everything with a good heart and expect nothhing in return
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col text-center">
        <div className="bg-[#fff] p-8 rounded-full">
          <p className="text-2xl text-[#F57D4C]">
            <BsCurrencyDollar />
          </p>
        </div>
        <div>
          <h2 className="mt-4 font-semibold">100% MONEY SECURE</h2>
          <p className="mt-2 text-[#262626]/60">
            The money you make is a symbol of the value you create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tearms;
