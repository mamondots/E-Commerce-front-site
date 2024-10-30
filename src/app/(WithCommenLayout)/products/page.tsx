import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import Category from "@/app/component/Products/Category/Category";
import AllProducts from "@/app/component/Products/AllProducts/AllProducts";
const page = () => {
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead subTitle="Ink work" headTitle="Ink work"></SeactionHead>
      </div>

      <div className="mt-20 lg:px-20 md:px-16 sm:px-12 px-10">
        <div className="flex lg:flex-row md:flex-row flex-col  gap-8">
          <div className="lg:w-1/5 w-full">
            <Category></Category>
          </div>
          <div className="lg:w-3/4 w-full">
            <AllProducts></AllProducts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
