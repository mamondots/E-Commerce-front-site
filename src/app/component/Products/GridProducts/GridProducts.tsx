/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const GridProducts = ({ products }: { products: any }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {products.map((product: { title: React.Key | null | undefined }) => (
        <ProductCard key={product.title} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default GridProducts;
