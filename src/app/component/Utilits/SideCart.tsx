/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { PiShoppingBagBold } from "react-icons/pi";

const SideCart = ({ setCart }: { setCart: any }) => {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between text-lg text-[#262626]/80 font-semibold border-b pb-6">
        <h2>My shopping cart</h2>
        <p
          onClick={() => setCart(false)}
          className="text-2xl font-bold cursor-pointer hover:text-[#F57D4C] duration-300"
        >
          <HiMiniXMark></HiMiniXMark>
        </p>
      </div>

      <div className="flex items-center justify-center mt-40">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold text-[#262626]/30">
            <PiShoppingBagBold />
          </p>
          <h2 className="text-lg font-semibold mt-2">Your cart is empty</h2>
          <Link
            onClick={() => setCart(false)}
            href="/cart"
            className="px-6 py-3 cursor-pointer hover:bg-[#F57D4C] duration-300 tracking-widest mt-2 bg-[#262626] text-[#fff] font-semibold"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
