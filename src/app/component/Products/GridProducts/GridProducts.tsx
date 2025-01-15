/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { TProducts } from "@/types";

const GridProducts = ({ products }: { products: TProducts }) => {
  console.log(products);
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {products?.data.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default GridProducts;
