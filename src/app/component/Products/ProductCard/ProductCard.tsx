/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegHeart } from "react-icons/fa";

import QuickViewP from "../QuickViewP/QuickViewP";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  const { title, price, image, _id } = product;
  return (
    <div className="flex flex-col items-center">
      <div className="border-8 border-white relative group">
        <img src={image} alt="imf" />
        <div className="bg-[#fff] w-full h-full absolute top-2 opacity-0 group-hover:opacity-100 group-hover:top-0 duration-300">
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <button className="px-4 py-2 border border-[#262626]/50 hover:border-[#2626263b] text-[#262626]/70 uppercase text-sm font-semibold hover:bg-[#F57D4C] hover:text-[#fff] cursor-pointer duration-300">
              add to cart
            </button>
          </div>
          <div className="flex items-center text-xl text-[#262626]/70 justify-center absolute bottom-6 left-[40%] text-center">
            <p className="hover:text-[#F57D4C] cursor-pointer duration-300">
              <FaRegHeart />
            </p>
            <p className="hover:text-[#F57D4C] cursor-pointer duration-300">
              <QuickViewP></QuickViewP>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link
          href={`/products/${_id}`}
          className="text-sm font-semibold text-[#262626]/80 uppercase cursor-pointer hover:text-[#F57D4C] duration-300"
        >
          {title}
        </Link>

        <p className="mt-2 text-[#262626]/60">${price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
