import Image from "next/image";
import React from "react";
import Salaer from "@/assets/images/hand.gif";
import UserHome from "@/app/component/UserPages/UserHome/UserHome";

const page = () => {
  return (
    <div>
      <div>
        <h2 className="flex items-center gap-2">
          <span>Welcome User</span>
          <Image width={40} src={Salaer} alt="Salaer"></Image>
        </h2>
        <p className="mt-2 lg:w-2/3 w-full text-[#262626]/80 border-b border-[#262626]/20 pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          laborum libero ex repudiandae vel ut, hic repellendus. Placeat
          accusamus consequatur iure et sequi ea officiis.
        </p>
      </div>

      <div className="mt-2">
        <UserHome></UserHome>
      </div>
    </div>
  );
};

export default page;
