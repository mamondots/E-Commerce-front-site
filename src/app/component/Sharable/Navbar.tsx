"use client";

import { siteConfig } from "@/app/config/site";
import Link from "next/link";
import React, { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { IoMenuSharp } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleOpen = () => {
    setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
    console.log("ok");
  };
  return (
    <div>
      <div className="lg:px-20 md:px-16 sm:px-12 px-10 py-4">
        {/* dasktop */}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              M<span className="text-[#F47D4C]">_</span>
              <span>Shop</span>
            </h2>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center justify-center gap-8">
              {siteConfig.navItems.map((item) => (
                <li key={item.href} className="font-semibold">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center gap-3 cursor-pointer">
            <div className="hidden lg:block">
              <p>
                <IoSearchOutline />
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl font-semibold">
              <Link href="/login" className="hidden lg:block">
                <LuUser />
              </Link>
              <div className="hidden lg:block">
                <CiHeart />
              </div>
              <div>
                <p>
                  <LiaLuggageCartSolid />
                </p>
              </div>
            </div>
            <div onClick={handleOpen} className="lg:hidden">
              <p>
                <IoMenuSharp />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}

      <div
        className={`bg-[#2626263d] duration-1000 fixed z-[999] inset-0 top-0 lg:hidden ${
          menu ? "" : "hidden"
        }`}
      >
        <div
          className={`bg-[#fff] duration-1000  md:w-2/4 sm:w-2/4 w-full h-screen ${
            menu ? "" : ""
          }`}
        >
          <div className="flex items-center justify-between bg-[#222222] text-[#fff] px-8 py-4">
            <h2>
              E-<span>Shop</span>
            </h2>
            <div onClick={handleClose}>
              <p>
                <HiMiniXMark />
              </p>
            </div>
          </div>

          <div className="mt-4  px-8 py-4">
            <ul className="flex flex-col gap-4">
              {siteConfig.navItems.map((item) => (
                <div
                  key={item.href}
                  className="flex items-center justify-between text-lg"
                >
                  <li className="">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                  <p>
                    <GoPlus />
                  </p>
                </div>
              ))}
            </ul>

            <div className="flex items-center gap-2 mt-8">
              <div className="border p-2 text-sm text-black/60 hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">
                <p>
                  <FaFacebookF />
                </p>
              </div>
              <div className="border p-2 text-sm text-black/60 hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">
                <p>
                  <FaInstagram />
                </p>
              </div>
              <div className="border p-2 text-sm text-black/60 hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">
                <p>
                  <FaTwitter />
                </p>
              </div>
              <div className="border p-2 text-sm text-black/60 hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer">
                <p>
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
