import React from "react";
import UotImage from "@/assets/images/banner2_78a7ba11-dd8f-47c9-b5cd-210942588a06.avif";
import TitleImg from "@/assets/images/title-bg.png";
import Image from "next/image";

const HurryUp = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="lg:block hidden">
        <Image src={UotImage} alt="UotImage"></Image>
      </div>
      <div className="mt-4">
        <div className="relative">
          <p className="text-2xl absolute z-10">Hurry up</p>
          <Image
            className="absolute top-2 -rotate-6 w-[150px]"
            src={TitleImg}
            alt="UotImage"
          ></Image>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl">
            Let’s make something great work together.{" "}
            <span className="text-[#F47D4C] font-semibold cursor-pointer">
              Got a project in mind?
            </span>
          </h2>
          <p className="text-2xl py-4">almamon757@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default HurryUp;
