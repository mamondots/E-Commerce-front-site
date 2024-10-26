/* eslint-disable @next/next/no-img-element */
import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import { blogs } from "../../../../../public/Blogs";
import { MdOutlineMaximize } from "react-icons/md";
// type TBlogs = {
//   title: string;
//   date: string;
//   image: string;
// };
const Articles = () => {
  return (
    <div
      className="border-t border-[#262626]/15 py-20 -z-30"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div className="lg:px-20 md:px-16 sm:px-12 px-10">
        {/* Head title start */}
        <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-2">
          <div className="flex lg:flex-row md:flex-row flex-col  lg:items-center lg:justify-center lg:gap-3">
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold">
              Latest articles
            </h2>
            <p className=" text-[#F57D4C] lg:text-4xl lg:mt-6 md:mt-6 font-extrabold">
              <MdOutlineMaximize />
            </p>
            <p className="text-lg font-semibold text-[#262626]/60">
              Creativity takes courage
            </p>
          </div>
          <div>
            <button className="px-8 py-4 lg:mt-0 md:mt-0 mt-6 border border-[#262626]/40 text-[#262626]/70 hover:bg-[#F57D4C] hover:text-white duration-300 cursor-pointer uppercase font-semibold text-sm tracking-widest">
              collection
            </button>
          </div>
        </div>
        {/* Head title end */}

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-20">
          {blogs?.map((blog) => (
            <div key={blog.title} className="">
              <div className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="group-hover:scale-110 duration-300"
                    src={blog.image}
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[#262626]/80">{blog.date}</p>
                  <p className="mt-2 font-semibold text-[#262626]/90 hover:text-[#F57D4C] cursor-pointer duration-300">
                    {blog.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
