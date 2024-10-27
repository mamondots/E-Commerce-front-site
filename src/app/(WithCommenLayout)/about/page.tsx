/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import About01 from "@/assets/images/aboutHead.webp";
import Image from "next/image";
import Testimonal from "@/app/component/Testimonal/Testimonal";
import FasionPart from "@/app/component/LandingPage/FasionPart/FasionPart";
import Team from "@/app/component/Team/Team";
import Tearms from "@/app/component/Tearms/Tearms";
const page = () => {
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead subTitle="Our story" headTitle="Our story"></SeactionHead>
      </div>

      <div className="lg:px-20 md:px-16 sm:px-12 px-10 mt-12">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#262626]/60 font-semibold">
            Since 2020 our story
          </p>
          <h2 className="lg:text-5xl md:text-5xl sm:text-5xl text-3xl text-[#262626]/90 font-bold mt-2">
            Our about story
          </h2>
          <div className="mt-10 overflow-hidden">
            <Image
              className="hover:scale-105 duration-300 cursor-pointer"
              width={1000}
              src={About01}
              alt="About01"
            ></Image>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-16 lg:px-28 text-center">
          <div>
            <h3 className="font-semibold">5,000+ Happy customer</h3>
            <p className="mt-2 text-[#262626]/60">
              The customer's perception is your reality. Your most unhappy
              customers are your greatest source of learning
            </p>
          </div>
          <div>
            <h3 className="font-semibold">29+ Awards won</h3>
            <p className="mt-2 text-[#262626]/60">
              Awards can give you a tremendous amount of encouragement to keep
              getting better, no matter how young or old you are.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">40 years of experiences</h3>
            <p className="mt-2 text-[#262626]/60">
              The major problem is that we tend to live our life in our head, in
              our thoughts, cut off from our actual experience.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <Testimonal></Testimonal>
        </div>
        <div className="lg:px-20 md:px-16 sm:px-12 px-10 mt-20">
          <FasionPart></FasionPart>
        </div>
        <div className="mt-20">
          <Team></Team>
        </div>

        <div className="mt-20 lg:px-20">
          <Tearms></Tearms>
        </div>
      </div>
    </div>
  );
};

export default page;
