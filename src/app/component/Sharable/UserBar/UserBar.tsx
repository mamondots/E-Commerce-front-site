"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Tooltip } from "@nextui-org/tooltip";
import { userItems } from "@/app/config/userSite";

const UserBar = () => {
  const [expend, setExpend] = useState(true);

  const handleToggle = () => {
    setExpend(!expend);
  };
  return (
    <div
      className={`bg-[#262626] min-h-screen relative ${
        expend ? "lg:w-1/5 md:w-1/5 w-1/6" : "w-1/8"
      }`}
    >
      <div className="mt-6 px-6 flex items-center justify-between text-[#fff]">
        <Link
          href="/"
          className={`text-xl font-semibold text-[#fff] ${
            expend ? "hidden lg:block" : "hidden"
          }`}
        >
          M<span className="text-[#F47D4C]">_</span>
          <span>Shop</span>
        </Link>
        <div className="cursor-pointer" onClick={handleToggle}>
          <p className="text-xl">
            <GiHamburgerMenu />
          </p>
        </div>
      </div>

      <div className="mt-10 text-[#fff]">
        <ul className="px-4 flex flex-col gap-1">
          {userItems.map((item) => (
            <li
              key={item.href}
              className="px-2 py-2 cursor-pointer 
                 text-[#fff] flex items-center justify-between text-sm font-normal"
            >
              <Link
                href={item.href}
                className={`hidden lg:block${expend ? "" : "hidden"}`}
              >
                {item.label}
              </Link>
              <Tooltip
                placement="right"
                className="bg-[#F47D4C] text-[#fff] rounded"
                content={item.tooptip}
              >
                <p className="text-xl">{React.createElement(item.icon)}</p>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <ul className="font-normal text-[#fff] px-4 absolute bottom-10 flex flex-col gap-3 w-full">
          <li className="flex items-center justify-between">
            <Link
              href="/"
              className={`${expend ? "hidden lg:block " : "hidden"}`}
            >
              Home
            </Link>
            <Tooltip
              placement="right"
              className="bg-[#F47D4C] text-[#fff] rounded"
              content="Home"
            >
              <p className="text-xl">
                <FaHome />
              </p>
            </Tooltip>
          </li>
          <li className="flex items-center justify-between">
            <p className={`${expend ? "hidden lg:block" : "hidden"}`}>
              Log Out
            </p>
            <Tooltip
              placement="right"
              className="bg-[#F47D4C] text-[#fff] rounded"
              content="Log out"
            >
              <p className="text-xl">
                <TbLogout />
              </p>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserBar;
