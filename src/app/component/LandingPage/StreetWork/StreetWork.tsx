/* eslint-disable @next/next/no-async-client-component */
"use client";
import React from "react";
import bgImg from "@/assets/images/banner-bg.png";
import BodyImg from "@/assets/images/body-bg.jpg";
import { MdOutlineMaximize } from "react-icons/md";
// import { products } from "../../../../../public/Products";

// import ProductCard from "../../Products/ProductCard/ProductCard";

import HurryUp from "../HurryUp/HurryUp";
import { getStreetProducts } from "@/services/StreetProducts";
import StreetSlider from "./StreetSlider";

const StreetWork = async () => {
  const { data: products } = await getStreetProducts();
  // console.log(products);
  return (
    <div
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div
        className=" py-8 rotate-180"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      ></div>

      <div className="py-20">
        <div className="lg:px-20 md:px-16 sm:px-12 px-10">
          {/* Head title start */}
          <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-2">
            <div className="flex lg:flex-row md:flex-row flex-col  lg:items-center lg:justify-center lg:gap-3">
              <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold">
                Street 2024
              </h2>
              <p className=" text-[#F57D4C] lg:text-4xl lg:mt-6 md:mt-6 font-extrabold">
                <MdOutlineMaximize />
              </p>
              <p className="text-lg font-semibold text-[#262626]/60">
                Colorful serenity
              </p>
            </div>
            <div>
              <button className="px-8 py-4 lg:mt-0 md:mt-0 mt-6 border border-[#262626]/40 text-[#262626]/70 hover:bg-[#F57D4C] hover:text-white duration-300 cursor-pointer uppercase font-semibold text-sm tracking-widest">
                collection
              </button>
            </div>
          </div>
          {/* Head title end */}
        </div>
        {/* slider */}
        <StreetSlider products={products}></StreetSlider>
      </div>
      <div className="lg:mt-16 mt-12 lg:px-28 md:px-16 sm:px-12 px-10 pb-12">
        <HurryUp></HurryUp>
      </div>
    </div>
  );
};

export default StreetWork;
