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
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import TopSearcBar from "../Utilits/TopSearcBar";
import SideCart from "../Utilits/SideCart";
import { useUser } from "@/context/user.provider";
// import { logout } from "@/services/AuthServices";
import SwithDashBoard from "./SwithDashBoard/SwithDashBoard";
// import { logout } from "@/services/AuthServices";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
  const { user } = useUser();

  const handleOpen = () => setMenu(true);
  const handleClose = () => setMenu(false);

  // const handleLogout = () => {
  //   logout();
  //   setUser(null); // Clear user data from context
  // };

  // useEffect(() => {
  //   console.log("Current user:", user);
  // }, [user]);

  return (
    <div>
      <div className="lg:px-20 md:px-16 sm:px-12 px-10 py-4">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-semibold">
              M<span className="text-[#F47D4C]">_</span>Shop
            </Link>
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
            <div onClick={() => setSearch(true)} className="hidden lg:block">
              <p>
                <IoSearchOutline />
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl font-semibold">
              <Link href="/wishlist" className="hidden lg:block">
                <CiHeart />
              </Link>
              <div onClick={() => setCart(true)}>
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

            <div>
              {user?.email ? (
                // <button onClick={handleLogout} className="font-semibold">
                //   Logout
                // </button>
                <SwithDashBoard></SwithDashBoard>
              ) : (
                <Link href="/login" className="hidden lg:block">
                  <LuUser />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-[#2626263d] duration-1000 fixed z-[999] inset-0 top-0 lg:hidden ${
          menu ? "" : "hidden"
        }`}
      >
        <div
          className={`bg-[#fff] duration-1000 md:w-2/4 sm:w-2/4 w-full h-screen`}
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

          <div className="mt-4 px-8 py-4">
            <ul className="flex flex-col gap-4">
              {siteConfig.navItems.map((item) => (
                <div
                  key={item.href}
                  className="flex items-center justify-between text-lg"
                >
                  <li>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                  <p>
                    <GoPlus />
                  </p>
                </div>
              ))}
            </ul>

            <div className="flex items-center gap-2 mt-8">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="border p-2 text-sm text-black/60 hover:bg-[#262626] hover:text-[#fff] duration-300 cursor-pointer"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {search && (
        <div className="w-full bg-[#262626]/60 fixed h-screen z-50 top-0">
          <div className="py-16 bg-[#fff]">
            <TopSearcBar setSearch={setSearch}></TopSearcBar>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cart && (
        <div className="w-full bg-[#262626]/60 fixed h-screen z-50 top-0">
          <div className="h-screen bg-[#fff] lg:w-1/3 md:w-2/3 sm:w-2/3 w-full absolute right-0">
            <SideCart setCart={setCart}></SideCart>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
