/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import ProductDetails from "@/app/component/Products/ProductDetails/ProductDetails";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import { useGetProduct } from "@/hooks/products.hook";

interface ProductId {
  params: {
    id: string;
  };
}
const page = ({ params }: ProductId) => {
  // Unwrapping the params object
  // interface ProductId {
  //   params: {
  //     id: string;
  //   };
  // }
  const { data: product } = useGetProduct(params.id);
  console.log(product);
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead
          subTitle="Street hen cock (30X21)"
          headTitle="Street hen cock (30X21)"
        ></SeactionHead>
      </div>
      <div>
        <ProductDetails product={product}></ProductDetails>
      </div>
    </div>
  );
};

export default page;
