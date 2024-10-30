import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import ProductDetails from "@/app/component/Products/ProductDetails/ProductDetails";
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
        <SeactionHead
          subTitle="Street hen cock (30X21)"
          headTitle="Street hen cock (30X21)"
        ></SeactionHead>
      </div>
      <div>
        <ProductDetails></ProductDetails>
      </div>
    </div>
  );
};

export default page;
