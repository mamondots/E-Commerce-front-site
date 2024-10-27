/* eslint-disable @next/next/no-img-element */
import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import { blogs } from "../../../../public/Blogs";
const page = () => {
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead subTitle="Art" headTitle="Art"></SeactionHead>
      </div>

      <div className="lg:mt-20 mt-12 flex justify-center items-center">
        <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-2xl font-bold">
          Latest articles
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-20 lg:px-20 md:px-16 sm:px-12 px-10">
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
  );
};

export default page;
