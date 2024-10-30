import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import CartProducts from "@/app/component/Products/CartProducts/CartProducts";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import ShippingCalacu from "@/app/component/Utilits/ShippingCalacu";

const page = () => {
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead
          subTitle="Shopping cart"
          headTitle="Shopping cart"
        ></SeactionHead>
      </div>

      <div className="mt-12 lg:px-28 px-10">
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-8 gap-4">
          <div className="lg:w-3/4 w-full">
            <div>
              <div className="text-center flex items-center justify-center text-base font-semibold">
                <h2 className="lg:w-[300px] text-[#262626]/80">
                  Spend $70.00 more and get free shipping!
                </h2>
              </div>
              <div className="mt-8">
                <div className="grid text-sm font-semibold text-[#262626]/70 lg:grid-cols-2 lg:gap-4 gap-2 border-b border-[#262626]/20 pb-4">
                  <div>
                    <h2>Products</h2>
                  </div>
                  <div className="flex lg:flex-row md:flex-row flex-col gap-2 lg:items-center md:items-center lg:justify-between md:justify-between">
                    <div>
                      <h2>Quantity</h2>
                    </div>
                    <div>
                      <h2>Total</h2>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-4 gap-2 mt-6 border-b border-[#262626]/20 pb-6">
                  <div>
                    <CartProducts></CartProducts>
                  </div>
                  <div className="flex lg:flex-row md:flex-row flex-col gap-2 lg:items-center md:items-center lg:justify-between md:justify-between">
                    <div className="inline-flex items-center gap-4">
                      <div className="flex items-center gap-6 border hover:border-[#F57D4C] duration-300 px-2 py-1 border-[#262626]/40 text-[#262626]/70">
                        <p className="text-xl cursor-pointer">+</p>
                        <p>1</p>
                        <p className="text-xl cursor-pointer">-</p>
                      </div>
                      <div>
                        <p className="hover:text-[#F57D4C] cursor-pointer duration-300">
                          <FaRegTrashAlt />
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">$21.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex  lg:flex-row md:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-4">
                <div className="border border-[#262626]/40  flex items-center">
                  <p className="px-2 text-[#262626]/50">
                    <CiGift />
                  </p>
                  <input
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="Discount code"
                  />
                  <p className="bg-[#262626] text-xl text-white py-2 px-3  hover:bg-[#F57D4C] duration-300 cursor-pointer">
                    <IoMdArrowForward />
                  </p>
                </div>
                <div className="bg-[#262626] uppercase text-center text-sm font-semibold text-white py-3 px-6 hover:bg-[#F57D4C] duration-300 cursor-pointer">
                  <p>return to store</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-semibold pb-4 text-[#262626]/80">
                  Order special instructions
                </p>
                <input
                  className="px-4 py-2 pb-20 outline-none border border-[#262626]/30 w-full bg-transparent"
                  type="text"
                  placeholder="Order special instructions.."
                />
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full">
            <div className="bg-[#fff]">
              <ShippingCalacu></ShippingCalacu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
