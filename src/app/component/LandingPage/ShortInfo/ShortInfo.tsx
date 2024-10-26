import React from "react";
import UotImage from "@/assets/images/shortpoem.webp";
import TitleImg from "@/assets/images/title-bg.png";
import Image from "next/image";

const ShortInfo = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <Image src={UotImage} alt="UotImage"></Image>
      </div>
      <div className="mt-4">
        <div className="relative">
          <p className="text-2xl absolute z-10">Since 1983</p>
          <Image
            className="absolute top-2 -rotate-6 w-[150px]"
            src={TitleImg}
            alt="UotImage"
          ></Image>
        </div>
        <h2 className="mt-20 text-2xl">
          Painting is poetry which is seen and not heard, and poetry is a
          painting which is heard but not seen.
        </h2>
      </div>
    </div>
  );
};

export default ShortInfo;
