"use client";
import React from "react";
import BannerImg from "@/assets/images/slider1.jpg";
import HeartImg from "@/assets/images/heart-icon.png";

import SignitureImg from "@/assets/images/slider_sign_img.webp";
import Image from "next/image";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="">
      <div
        className="mt-[-60px] w-full py-20 top-0 -z-30"
        style={{
          backgroundImage: `url(${BannerImg.src})`,
        }}
      >
        <div className="">
          <div className="py-20 xl:ml-[700px] lg:ml-[600px] px-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex gap-2 items-center"
            >
              <Image src={HeartImg} alt="heart"></Image>
              <p>
                <span className="text-xl">Hello!</span> i am artist
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-2 relative"
            >
              <h2 className="lg:text-6xl md:text-6xl relative  text-5xl font-semibold xl:w-[450px] lg:w-[450px] md:w-[500px] w-[300px]">
                Best <span className="z-10 ">online</span> platform for painting
              </h2>
              {/* <div className="absolute top-4 left-36 -rotate-6 -z-10">
                <Image src={LevelImg} alt="heart"></Image>
              </div> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-[180px] mt-8"
            >
              <Image src={SignitureImg} alt="heart"></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
