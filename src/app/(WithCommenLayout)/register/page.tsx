/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import Link from "next/link";
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
          subTitle="Create account"
          headTitle="Create account"
        ></SeactionHead>
      </div>
      <div className="mt-20 flex justify-center items-center flex-col">
        <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-2xl font-bold">
          Create account
        </h2>
        <p className="mt-6 text-[#262626]/50">Please register account detail</p>
      </div>

      <div className="flex lg:px-96 px-10 flex-col mt-16">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Your name
            </label>
            <input
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Email address
            </label>
            <input
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="email"
              placeholder="Email address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Password
            </label>
            <input
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Your phone number
            </label>
            <input
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="text"
              placeholder="Your Number"
            />
          </div>

          <div className="flex items-center justify-between">
            <input
              className="px-8 py-3 border border-[#262626] hover:bg-[#F57D4C] hover:text-[#fff] duration-300 cursor-pointer hover:border-transparent font-semibold uppercase text-sm tracking-widest"
              type="submit"
              value="create"
            />
          </div>
        </form>

        <div className="bg-[#262626] flex items-center justify-center gap-1 text-[#fff] py-7 mt-8">
          <h2>Already have account?</h2>
          <Link
            href="/login"
            className="text-[#fff]/40 text-sm hover:text-[#F57D4C] cursor-pointer duration-300"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
