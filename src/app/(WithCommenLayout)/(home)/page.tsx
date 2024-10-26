import ArtGallary from "@/app/component/LandingPage/ArtGallary/ArtGallary";
import Banner from "@/app/component/LandingPage/Banner/Banner";
import InkWork from "@/app/component/LandingPage/InkWork/InkWork";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="relative">
        <InkWork></InkWork>
        <ArtGallary></ArtGallary>
      </div>
    </div>
  );
};

export default page;
