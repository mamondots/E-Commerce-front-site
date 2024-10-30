import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import ProductImg from "@/assets/images/ubone-arts-store-product-01.jpg";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import ReletiveProducts from "../ReletiveProducts/ReletiveProducts";
import { products } from "../../../../../public/Products";

const ProductDetails = () => {
  return (
    <div>
      <div className="lg:px-28 md:px-16 sm:px-12 px-10 mt-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="border border-[#262626]">
            <Image width={500} src={ProductImg} alt="ProductImg"></Image>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Street hen cock (30X21)</h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1 font-bold text-yellow-600">
                <p>
                  <FaRegStar />
                </p>
                <p>
                  <FaRegStar />
                </p>
                <p>
                  <FaRegStar />
                </p>
                <p>
                  <FaRegStar />
                </p>
              </div>
              <p className="text-sm text-[#262626]/70">No reviews</p>
              <p>/</p>
              <p className="text-sm font-semibold text-red-600">
                12 sold in last 2 hours
              </p>
            </div>
            <h2 className="text-3xl font-medium mt-3 text-[#F57D4C]">$21.00</h2>

            <div className="mt-3 flex items-center  gap-2 border-b border-[#262626]/20 pb-5">
              <h2>Availability :</h2>
              <div className="flex items-center  gap-1">
                <div className="bg-[#3ED660] w-[12px] h-[12px] rounded-full">
                  <div className="bg-[#3ED660] flex items-center justify-center w-[10px] h-[10px] border border-[#fff] rounded-full"></div>
                </div>
                <p className="text-sm text-[#262626]/70">20 in stock</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[#262626]/70">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text and typesetting industry
              </p>
            </div>

            <div className="mt-7">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-6 border hover:border-[#F57D4C] duration-300 px-2 py-1 border-[#262626]/40 text-[#262626]/70">
                  <p className="text-xl cursor-pointer">+</p>
                  <p>1</p>
                  <p className="text-xl cursor-pointer">-</p>
                </div>
                <div className="w-full text-center py-2 text-sm border border-[#262626]/40 hover:text-[#fff] cursor-pointer hover:bg-[#F47D4C] duration-300">
                  <h2>ADD TO CART</h2>
                </div>
              </div>

              <div className="bg-[#262626]  text-[#fff] hover:bg-[#F57D4C] duration-300 cursor-pointer text-center py-4 mt-6">
                <input
                  className="outline-none uppercase font-semibold text-sm"
                  type="submit"
                  value="Check out"
                />
              </div>
            </div>

            <div className="mt-6 border-b border-[#262626]/20 pb-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-3 font-semibold text-[#262626]/60 hover:text-[#F57D4C] cursor-pointer duration-300">
                <p>
                  <FaRegHeart />
                </p>
                <p>Wishlist</p>
              </div>
              <div className="flex items-center gap-3 font-semibold text-[#262626]/60 hover:text-[#F57D4C] cursor-pointer duration-300">
                <p>
                  <HiOutlineDocumentText />
                </p>
                <p>Sizeguide</p>
              </div>
              <div className="flex items-center gap-3 font-semibold text-[#262626]/60 hover:text-[#F57D4C] cursor-pointer duration-300">
                <p>
                  <FiEdit />
                </p>
                <p>Question</p>
              </div>
              <div className="flex items-center gap-3 font-semibold text-[#262626]/60 hover:text-[#F57D4C] cursor-pointer duration-300">
                <p>
                  <IoShareSocialOutline />
                </p>
                <p>Share</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Delivery :</p>
                <p className="text-base text-[#262626]/70">
                  Estimated delivery time: 5-7 days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Returns:</p>
                <p className="text-base text-[#262626]/70">
                  Within 45 days of purchase
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Sku:</p>
                <p className="text-base text-[#262626]/70">445</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-[#262626]/20">
        <ReletiveProducts products={products}></ReletiveProducts>
      </div>
    </div>
  );
};

export default ProductDetails;
