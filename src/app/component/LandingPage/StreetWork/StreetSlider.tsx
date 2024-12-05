/* eslint-disable @typescript-eslint/no-explicit-any */
"use clent";
import React from "react";
import ProductCard from "../../Products/ProductCard/ProductCard";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
const StreetSlider = ({ products }: { products: any }) => {
  return (
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
  );
};

export default StreetSlider;
