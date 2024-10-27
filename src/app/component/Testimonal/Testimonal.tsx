"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import User1 from "@/assets/images/quotes-01.webp";
import User2 from "@/assets/images/quotes-02.webp";
import User3 from "@/assets/images/quotes-03.webp";

const Testimonal = () => {
  return (
    <Swiper>
      <div className="swiper-wrapper">
        <SwiperSlide>
          <div className="text-center flex items-center justify-center flex-col cursor-pointer">
            <div className="rounded-full border-4 border-[#fff]">
              <Image
                className="rounded-full"
                src={User1}
                alt="User1"
                width={60}
                height={60}
              ></Image>
            </div>
            <h2 className="font-semibold mt-2 text-[#262626]/80">
              we love our client
            </h2>
            <p className="w-2/3 mt-2 text-[#262626]/60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              harum eos expedita, enim consectetur deleniti quidem repudiandae
              maiores. Cum ratione, nobis et ea blanditiis minus!
            </p>
            <h2 className="mt-12 text-[#262626]/60 font-semibold">Al Mamon</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center flex items-center justify-center flex-col cursor-pointer">
            <div className="rounded-full border-4 border-[#fff]">
              <Image
                className="rounded-full"
                src={User2}
                alt="User2"
                width={60}
                height={60}
              ></Image>
            </div>
            <h2 className="font-semibold mt-2 text-[#262626]/80">
              we love our client
            </h2>
            <p className="w-2/3 mt-2 text-[#262626]/60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              harum eos expedita, enim consectetur deleniti quidem repudiandae
              maiores. Cum ratione, nobis et ea blanditiis minus!
            </p>
            <h2 className="mt-12 text-[#262626]/60 font-semibold">Al Mamon</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center flex items-center justify-center flex-col cursor-pointer">
            <div className="rounded-full border-4 border-[#fff]">
              <Image
                className="rounded-full"
                src={User3}
                alt="User3"
                width={60}
                height={60}
              ></Image>
            </div>
            <h2 className="font-semibold mt-2 text-[#262626]/80">
              we love our client
            </h2>
            <p className="w-2/3 mt-2 text-[#262626]/60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              harum eos expedita, enim consectetur deleniti quidem repudiandae
              maiores. Cum ratione, nobis et ea blanditiis minus!
            </p>
            <h2 className="mt-12 text-[#262626]/60 font-semibold">Al Mamon</h2>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Testimonal;
