/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Categories } from "../../../../../public/Categories";
import { FiEye } from "react-icons/fi";
import SpecialImage from "@/assets/images/ubone-arts-store-product-01.jpg";
import OfferImage from "@/assets/images/offer.webp";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
const Category = () => {
  return (
    <div>
      <h2 className="text-lg font-bold">Categories</h2>

      <div className="mt-4 flex flex-col gap-2 border-b border-[#262626]/20 pb-8">
        {Categories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center justify-between text-sm font-semibold text-[#262626]/60">
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#F57D4C] duration-300">
                <input type="checkbox" />
                <p>{category.title}</p>
              </div>
              <div>
                <p>(0)</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Availability</h2>

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm font-semibold text-[#262626]/60">
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#F57D4C] duration-300">
              <input type="checkbox" />
              <p>In Stock</p>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm font-semibold text-[#262626]/60">
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#F57D4C] duration-300">
              <input type="checkbox" />
              <p>Out of stock</p>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Special product</h2>

        <div className="mt-4">
          <div className="flex flex-col items-center">
            <div className="border-8 border-[#F57D4C]/20 relative group">
              <Image src={SpecialImage} alt="imf" />
              <div className="bg-[#fff] w-full h-full absolute top-2 opacity-0 group-hover:opacity-100 group-hover:top-0 duration-300">
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <button className="px-4 py-2 border border-[#262626]/50 hover:border-[#2626263b] text-[#262626]/70 uppercase text-sm font-semibold hover:bg-[#F57D4C] hover:text-[#fff] cursor-pointer duration-300">
                    add cart
                  </button>
                </div>
                <div className="flex items-center text-xl text-[#262626]/70 justify-center gap-3 absolute bottom-6 left-[40%] text-center">
                  <p className="hover:text-[#F57D4C] cursor-pointer duration-300">
                    <FaRegHeart />
                  </p>
                  <p className="hover:text-[#F57D4C] cursor-pointer duration-300">
                    <FiEye />
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-sm font-semibold text-[#262626]/80 uppercase cursor-pointer hover:text-[#F57D4C] duration-300">
                Street hen
              </h2>
              <p className="mt-2 text-[#262626]/60">$40.00</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Image src={OfferImage} alt="OfferImage"></Image>
        </div>
      </div>
    </div>
  );
};

export default Category;
