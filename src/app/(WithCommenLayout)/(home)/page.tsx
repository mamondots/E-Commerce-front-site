import ArtGallary from "@/app/component/LandingPage/ArtGallary/ArtGallary";
import Articles from "@/app/component/LandingPage/Articles/Articles";
import Banner from "@/app/component/LandingPage/Banner/Banner";

import InkWork from "@/app/component/LandingPage/InkWork/InkWork";
import StreetWork from "@/app/component/LandingPage/StreetWork/StreetWork";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="relative">
        <InkWork></InkWork>
        <ArtGallary></ArtGallary>
        <StreetWork></StreetWork>
        <Articles></Articles>
      </div>
    </div>
  );
};

export default page;
