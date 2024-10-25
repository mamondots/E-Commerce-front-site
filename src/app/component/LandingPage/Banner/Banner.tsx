import React from "react";
import BannerImg from "@/assets/images/slider1.jpg";
import HeartImg from "@/assets/images/heart-icon.png";
import LevelImg from "@/assets/images/title-bg.png";
import SignitureImg from "@/assets/images/slider_sign_img.webp";
import Image from "next/image";
const Banner = () => {
  return (
    <div
      className="absolute w-full py-20 top-0 -z-30"
      style={{
        backgroundImage: `url(${BannerImg.src})`,
      }}
    >
      <div className="">
        <div className="py-20 xl:ml-[700px] lg:ml-[600px] px-12">
          <div className="inline-flex gap-2 items-center">
            <Image src={HeartImg} alt="heart"></Image>
            <p>
              <span className="text-xl">Hello!</span> i am artist
            </p>
          </div>
          <div className="mt-2 relative">
            <h2 className="lg:text-6xl md:text-6xl text-5xl font-semibold xl:w-[450px] lg:w-[450px] md:w-[500px] w-[300px]">
              Best <span>online</span> platform for painting
            </h2>
            <div className="absolute top-4 left-36 -rotate-6 -z-30">
              <Image src={LevelImg} alt="heart"></Image>
            </div>
          </div>
          <div className="w-[180px] mt-8">
            <Image src={SignitureImg} alt="heart"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
