import React from "react";
import UserImage from "@/assets/images/quotes-01.webp";
import Image from "next/image";

import { RiDeleteBin6Line } from "react-icons/ri";

import UpdateRole from "../UpdateRole/UpdateRole";

const ManageUser = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-xl">Manage Users Information</h2>
        <p className="mt-2 lg:w-2/3 w-full text-[#262626]/80 border-b border-[#262626]/20 pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          laborum libero ex repudiandae vel ut, hic repellendus. Placeat
          accusamus consequatur iure et sequi ea officiis.
        </p>
      </div>

      <div className="mt-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-2 gap-2 bg-[#262626]/20 px-4 py-4 rounded text-sm font-semibold text-[#262626]">
          <div className="flex items-center lg:gap-12 md:gap-12 gap-4">
            <p>Index</p>
            <p>Image</p>
          </div>

          <div>
            <p>Name</p>
          </div>
          <div className="flex items-center lg:gap-12 md:gap-12 gap-4">
            <p>Role</p>
            <p>Date</p>
          </div>
          <div>
            <p>Action</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4 grid lg:grid-cols-4 md:grid-cols-4  sm:grid-cols-2 lg:gap-4 md:gap-2 gap-2 items-center justify-center">
          <div className="flex lg:flex-row md:flex-row flex-col items-center lg:gap-16 md:gap-16 gap-2 text-sm font-semibold text-[#262626]/70">
            <p>1</p>
            <div>
              <Image
                className="rounded"
                src={UserImage}
                width={50}
                height={50}
                alt="ProducImage"
              ></Image>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#262626]/70">Al Mamon</p>
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col items-center lg:gap-12 md:gap-12 gap-2 text-sm font-semibold text-[#262626]/70">
            <p>User</p>
            <p>11-06-2024</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#262626]/70 cursor-pointer">
            <p>
              <UpdateRole></UpdateRole>
            </p>
            <p className="p-2 border border-[#262626]/20 hover:bg-[red] hover:text-[#fff] duration-300">
              <RiDeleteBin6Line />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
