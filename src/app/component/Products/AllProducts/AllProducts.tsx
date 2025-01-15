"use client";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoGridOutline } from "react-icons/io5";
import GridProducts from "../GridProducts/GridProducts";

// import { products } from "../../../../../public/Products";
import RowProducts from "../RowProducts/RowProducts";
import { TProducts } from "@/types";

const AllProducts = ({ products }: { products: TProducts }) => {
  console.log(products);
  const [view, setView] = useState(false);
  return (
    <div>
      <h2 className="font-semibold">All Products</h2>

      <div className="mt-4 flex items-center justify-between border-b border-[#262626]/20 pb-6">
        <div className="flex items-center gap-3 cursor-pointer text-lg">
          <p
            className={`${view ? "text-xl" : "text-2xl text-[#F57D4C]"}`}
            onClick={() => setView(true)}
          >
            <IoGridOutline />
          </p>
          <p
            className={`${view ? "text-2xl text-[#F57D4C]" : "text-xl"}`}
            onClick={() => setView(false)}
          >
            <TfiMenuAlt />
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-[#262626]/70">Sort by:</h2>
          <div>
            <select className="bg-transparent outline-none text-[#262626]/70 text-sm px-4 text-start">
              <option value="">Featured</option>
              <option value="">Price low to high</option>
              <option value="">Price high to low</option>
              <option value="">Alphabetically, Z-A</option>
              <option value="">Alphabetically, A-Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {view ? (
          <RowProducts products={products}></RowProducts>
        ) : (
          <GridProducts products={products}></GridProducts>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
