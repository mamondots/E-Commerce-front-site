import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageCategories = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-xl">Manage and create categories</h2>
        <p className="mt-2 lg:w-2/3 w-full text-[#262626]/80 border-b border-[#262626]/20 pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          laborum libero ex repudiandae vel ut, hic repellendus. Placeat
          accusamus consequatur iure et sequi ea officiis.
        </p>
      </div>
      <div className="lg:w-2/3 w-full mt-8 relative border-b border-[#262626]/20 pb-4">
        {/* <div className="right-0 absolute">
          <button className="px-6 py-3 bg-[#262626] text-[#fff] rounded text-sm font-semibold hover:bg-[#F47D4C] cursor-pointer duration-300">
            Create Category
          </button>
        </div> */}
        <div className="py-1">
          <form className="">
            <div className="flex gap-2">
              <input
                className="px-4 py-2 rounded bg-[#F47D4C] text-[#ffff] hover:bg-[#262626] cursor-pointer duration-300 text-sm font-semibold"
                type="submit"
                value="Add Category"
              />
              <input
                className="px-4 py-2 border border-[#262626]/20 rounded outline-none w-full"
                type="text"
                placeholder="Category Name..."
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-between items-center lg:w-2/3 w-full mt-4">
        <div className="flex items-center gap-8 text-sm font-semibold text-[#262626]/70">
          <p>Seri No</p>
          <p>Categories</p>
        </div>
        <div className="text-sm font-semibold text-[#262626]/70">
          <p>Action</p>
        </div>
      </div>

      <div className="flex justify-between items-center lg:w-2/3 w-full mt-4">
        <div className="flex items-center justify-center gap-12 text-sm font-semibold text-[#262626]/70">
          <p className="w-[30px] h-[30px] flex justify-center items-center bg-[#F47D4C] text-sm font-semibold text-[#fff]">
            1
          </p>
          <p>Ink Work</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-[#262626]/70 cursor-pointer">
          <p className="p-2 border border-[#262626]/20 hover:bg-[#F47D4C] hover:text-[#fff] duration-300">
            <HiOutlinePencilSquare />
          </p>
          <p className="p-2 border border-[#262626]/20 hover:bg-[red] hover:text-[#fff] duration-300">
            <RiDeleteBin6Line />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
