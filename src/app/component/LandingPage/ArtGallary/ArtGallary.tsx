"use client";
import React, { useState } from "react";
import bgImg from "@/assets/images/banner-bg.png";
import Landscript from "@/assets/images/landscape.webp";
import Pandscript from "@/assets/images/portrait.jpg";
import Inkndscript from "@/assets/images/Ink-work.webp";
import Wilddscript from "@/assets/images/wildlife.webp";
import Image from "next/image";
const ArtGallary = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setTab(index);
  };
  return (
    <div
      className="py-12 mt-[-45px] lg:px-20 md:px-16 sm:px-12 px-10"
      style={{
        backgroundImage: `url(${bgImg.src})`,
      }}
    >
      <div className="mt-28">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-6 text-5xl font-semibold  cursor-pointer">
            <div
              onClick={() => toggleTab(1)}
              className={
                tab === 1
                  ? "text-[#262626] flex items-center gap-6"
                  : "text-[#262626]/60"
              }
            >
              <div>Landscape</div>
              <div
                className={
                  tab === 1 ? "block text-xl text-[#F47D4C]" : "hidden"
                }
              >
                Itms 12
              </div>
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                tab === 2
                  ? "text-[#262626] flex items-center gap-6"
                  : "text-[#262626]/60"
              }
            >
              <div>Portrait</div>
              <div
                className={
                  tab === 2 ? "block text-xl text-[#F47D4C]" : "hidden"
                }
              >
                Itms 15
              </div>
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={
                tab === 3
                  ? "text-[#262626] flex items-center gap-6"
                  : "text-[#262626]/60"
              }
            >
              <div>Ink work</div>
              <div
                className={
                  tab === 3 ? "block text-xl text-[#F47D4C]" : "hidden"
                }
              >
                Itms 16
              </div>
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={
                tab === 4
                  ? "text-[#262626] flex items-center gap-6"
                  : "text-[#262626]/60"
              }
            >
              <div>Wildlife It</div>
              <div
                className={
                  tab === 4 ? "block text-xl text-[#F47D4C]" : "hidden"
                }
              >
                Itms 18
              </div>
            </div>
          </div>

          <div>
            <div
              className={
                tab === 1
                  ? "block duration-300 transition"
                  : "hidden duration-300 transition"
              }
            >
              <Image src={Landscript} alt=""></Image>
            </div>

            <div
              className={
                tab === 2
                  ? "block duration-300 transition"
                  : "hidden duration-300 transition"
              }
            >
              <Image src={Pandscript} alt=""></Image>
            </div>

            <div className={tab === 3 ? "block" : "hidden"}>
              <Image src={Inkndscript} alt=""></Image>
            </div>

            <div className={tab === 4 ? "block" : "hidden"}>
              <Image src={Wilddscript} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtGallary;
