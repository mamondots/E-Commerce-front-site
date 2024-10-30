/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RowProducts = ({ products }: { products: any }) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div
          key={product.title}
          className="flex lg:flex-row md:flex-row flex-col  items-center gap-8"
        >
          <div>
            <Image
              className="border-8 border-[#fff]"
              src={product.image}
              width={250}
              height={250}
              alt="image"
            ></Image>
          </div>

          <div className="flex flex-col lg:items-start md:items-start lg:justify-start md:justify-start justify-center items-center">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="mt-2 font-normal text-[#262626]/70">
              ${product.Price}.00
            </p>
            <p className="lg:w-[400px] mt-2 text-[#262626]/70 leading-relaxed lg:text-start md:text-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate eligendi autem laboriosam dolorem, neque deserunt.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <p className="px-2 py-2 bg-[#262626] text-[#fff] hover:bg-[#F57D4C] duration-300 cursor-pointer">
                <FaRegHeart />
              </p>
              <p className="px-2 py-2 bg-[#262626] text-[#fff] hover:bg-[#F57D4C] duration-300 cursor-pointer">
                <MdOutlineShoppingCart />
              </p>
              <p className="px-2 py-2 bg-[#262626] text-[#fff] hover:bg-[#F57D4C] duration-300 cursor-pointer">
                <FiEye />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowProducts;
