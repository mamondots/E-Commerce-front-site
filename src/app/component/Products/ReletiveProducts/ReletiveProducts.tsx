/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { products } from "../../../../../public/Products";

import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";
const ReletiveProducts = ({ products }: { products: any }) => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center flex-col">
        <p className="text-[#262626]/70 font-semibold">You might also like</p>
        <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-bold mt-3">
          Related product
        </h2>
      </div>

      <div className="mt-12 lg:ml-[78px] lg:px-0 px-8">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {products?.map((product: { title: React.Key | null | undefined }) => (
            <SwiperSlide key={product.title} className="">
              <ProductCard product={product}></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReletiveProducts;
