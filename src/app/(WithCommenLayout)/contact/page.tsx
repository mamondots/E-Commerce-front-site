/* eslint-disable @next/next/no-img-element */
import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import { HiOutlineMail } from "react-icons/hi";
import { countres } from "../../../../public/Countres";
import { LuPhoneCall } from "react-icons/lu";

import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import ContactForm from "@/app/component/ContactForm/ContactForm";

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
          subTitle="Keep in touch"
          headTitle="Keep in touch"
        ></SeactionHead>
      </div>

      <div className="mt-20 lg:px-28 md:px-16 sm:px-12 px-10">
        <div className="flex items-center justify-center pb-16">
          <h2 className="lg:text-6xl md:text-6xl text-4xl font-bold">
            Quick support
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center flex-col text-center">
            <div className="bg-[#fff] p-8 rounded-full">
              <p className="text-2xl text-[#F57D4C]">
                <FiMapPin />
              </p>
            </div>
            <div className="mt-4">
              <p className="mt-2 text-[#262626]/60">
                14 Ringe lane, las vegas,
              </p>
              <p className="mt-2 text-[#262626]/60">nv, 89156 united states</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col text-center">
            <div className="bg-[#fff] p-8 rounded-full">
              <p className="text-2xl text-[#F57D4C]">
                <LuPhoneCall />
              </p>
            </div>
            <div className="mt-4">
              <p className="mt-2 text-[#262626]/60">+00-1234567890</p>
              <p className="mt-2 text-[#262626]/60">(+1)54626541 00</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col text-center">
            <div className="bg-[#fff] p-8 rounded-full">
              <p className="text-2xl text-[#F57D4C]">
                <HiOutlineMail />
              </p>
            </div>
            <div className="mt-4">
              <p className="mt-2 text-[#262626]/60">demo@support.com</p>
              <p className="mt-2 text-[#262626]/60">support@yourmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-8 mt-20  w-full">
        <div className="bg-[#fff] w-full py-16">
          <div className="flex items-center justify-center">
            <h2 className="text-5xl font-bold">Get in touch</h2>
          </div>

          <div className="py-12 mt-8 px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 overflow-hidden">
            {countres.map((country) => (
              <div key={country.title}>
                <div className="flex items-center justify-center flex-col text-center">
                  <div>
                    <Image
                      src={country.image}
                      alt="country"
                      width={80}
                      height={80}
                    ></Image>
                  </div>
                  <div className="mt-6 text-[#262626]/60">
                    <h2>{country.title}</h2>
                    <p className="mt-2">{country.number}</p>
                    <p>{country.email}</p>
                    <p className="mt-2">{country.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 lg:px-28 md:px-16 sm:px-12 px-10">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default page;
