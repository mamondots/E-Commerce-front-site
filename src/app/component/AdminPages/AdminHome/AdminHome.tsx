import React from "react";
import Salaer from "@/assets/images/hand.gif";
import Image from "next/image";
import ProjectManagementCards from "../ProjectManagementCards/ProjectManagementCards";
import SalesChart from "../SalesChart/SalesChart";
import Banner from "@/assets/images/Banner.png";
const AdminHome = () => {
  return (
    <div>
      <div>
        <h2 className="flex items-center gap-2">
          <span>Welcome Alex</span>
          <Image width={40} src={Salaer} alt="Salaer"></Image>
        </h2>
        <p className="mt-2 lg:w-2/3 w-full text-[#262626]/80 border-b border-[#262626]/20 pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          laborum libero ex repudiandae vel ut, hic repellendus. Placeat
          accusamus consequatur iure et sequi ea officiis.
        </p>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Project Management</h2>

        <div className="mt-4">
          <ProjectManagementCards></ProjectManagementCards>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-4">
        <div>
          <SalesChart></SalesChart>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="bg-[#FFFFFF] border border-[#262626]/20 py-8 px-4 rounded">
              <p className="text-[#262626]/60">Total Revenue</p>
              <h2 className="mt-2 font-semibold">$ 97,250.89</h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#262626]/20 py-8 px-4 rounded">
              <p className="text-[#262626]/60">Total Order</p>
              <h2 className="mt-2 font-semibold">35,4205</h2>
            </div>
          </div>
          <div
            className="w-full "
            style={{
              backgroundImage: `url(${Banner.src})`,
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center text-center flex-col py-8 px-4">
              <h2 className="font-semibold text-[#fff]">
                Today’s Special Offer
              </h2>
              <p className="text-[#fff] text-sm mt-4">
                You can flat get 20% off on your next pro version if your sale
                break your last record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
