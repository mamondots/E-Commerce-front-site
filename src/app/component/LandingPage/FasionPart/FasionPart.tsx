import Image from "next/image";
import React from "react";
import About02 from "@/assets/images/about-store.webp";
const FasionPart = () => {
  return (
    <div>
      <div className="">
        <div className="mt-10 overflow-hidden">
          <Image
            className="hover:scale-105 duration-300 cursor-pointer"
            width={1000}
            src={About02}
            alt="About01"
          ></Image>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 lg:gap-16 gap-8 text-cneter">
          <div className="text-center">
            <h2 className="font-semibold text-lg text-[#262626]/80">
              Fashion is what you’re offered four times a yea by designers
              fashions fade
            </h2>
            <p className="mt-4 text-[#262626]/60">
              In early 1982, founder and creative direct or had the idea to
              design a bag collection where comfort, fashion, and distinction
              are key.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg text-[#262626]/80">
              I prefer to shock rather than to bore through repetition style is
              eternal
            </h2>
            <p className="mt-4 text-[#262626]/60">
              I have always believed that fashion was not only to make women
              more beautiful, but also to reassure them, give them confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FasionPart;
