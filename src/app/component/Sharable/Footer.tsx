import React from "react";
import bgImg from "@/assets/images/banner-bg.png";
import { MdOutlineMailOutline } from "react-icons/md";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="w-full py-20 mt-[-50px] absolute  z-30 lg:px-20 md:px-16 sm:px-12 px-10 "
      style={{
        backgroundImage: `url(${bgImg.src})`,
      }}
    >
      <div className="mt-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold">
              Come visit to enjoy your{" "}
              <span className="text-[#F57D4C]">favourite artworks</span>
            </h2>
            <div className="flex items-center gap-2 mt-6">
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
          <div>
            <h2 className="font-semibold">Bangladesh - Dhaka</h2>
            <p className="mt-6 text-[#262626]/60">
              02 C-Block, 7th Floor, Mirpur, Dhaka, Bangladesh
            </p>
            <p className="mt-2 text-[#262626]/60">
              {" "}
              © 2024 by{" "}
              <a
                href="https://al-mamon.netlify.app/"
                className="text-[#F57D4C] cursor-pointer"
                target="_blank"
              >
                al_mamon
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Work inquiries</h2>
            <p className="mt-6 text-[#262626]/60">
              Interested in working with us?
            </p>
            <p className="mt-2 text-[#262626]/60">almamon757@gmail.com</p>
          </div>
          <div>
            <h2 className="font-semibold">Newsletter</h2>
            <form className="mt-6 w-full border px-4 py-2 flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none"
              />
              <p className="text-[#262626]/60">
                <MdOutlineMailOutline />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
