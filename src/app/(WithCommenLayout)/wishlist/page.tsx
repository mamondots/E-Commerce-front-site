import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
const page = () => {
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead subTitle="Wishlist" headTitle="Wishlist"></SeactionHead>
      </div>

      <div className="mt-20 lg:px-20 px-12">
        <div className="flex justify-center lg:flex-row md:flex-row flex-col items-center gap-2 text-2xl font-semibold">
          <h2>Your wishlist is empty</h2>
          <h2 className="text-[#F57D4C] cursor-pointer font-extrabold hover:scale-95 duration-300 ">
            return to store
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
