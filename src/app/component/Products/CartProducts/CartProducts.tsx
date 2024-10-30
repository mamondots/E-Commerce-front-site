import Image from "next/image";
import React from "react";
import ProductImg from "@/assets/images/ubone-arts-store-product-01.jpg";

const CartProducts = () => {
  return (
    <div className="flex gap-4">
      <div className="border-4 border-[#fff]">
        <Image width={60} src={ProductImg} alt=""></Image>
      </div>
      <div>
        <h2 className="font-semibold text-[#262626]/90 text-sm">
          Street hen cock (30X21)
        </h2>
        <p className="text-sm mt-2 font-semibold text-[#262626]/80">$21.00</p>
        <p className="text-sm mt-2 font-semibold text-[#262626]/80">Arts</p>
      </div>
    </div>
  );
};

export default CartProducts;
