"use client";

import Lottie from "lottie-react";
import React from "react";
import animated2 from "../../../../Lottie/fTLXnGrepd.json";
import animated3 from "../../../../Lottie/byYgZ73ntu.json";
import animated4 from "../../../../Lottie/WWv9hSHDXe.json";

const UserHome = () => {
  return (
    <div>
      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        <div className="flex border shadow items-center justify-center gap-4 lg:px-0 px-4">
          <div>
            <p className="font-bold text-xl">My Products</p>
            <p>15%</p>
          </div>
          <div className="w-40">
            <Lottie animationData={animated2} loop={true} />
          </div>
        </div>

        <div className="flex border shadow items-center justify-center gap-4 lg:px-0 px-4">
          <div>
            <p className="font-bold text-base">Confirom Products</p>
            <p>10%</p>
          </div>
          <div className="w-40">
            <Lottie animationData={animated3} loop={true} />
          </div>
        </div>

        <div className="flex border shadow items-center justify-center gap-4 lg:px-0 px-4">
          <div>
            <p className="font-bold text-base">Pending Products</p>
            <p>5%</p>
          </div>
          <div className="w-40">
            <Lottie animationData={animated4} loop={true} />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UserHome;
