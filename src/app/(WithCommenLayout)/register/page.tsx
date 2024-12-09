/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useUserRegistration } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const redirect = searchParams.get("redirect");

  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();

  useEffect(() => {
    if (isPending) {
      // Handle Loading satate
    }
  }, [isPending]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    const userData = { ...data };
    formData.append("data", JSON.stringify(userData));
    handleUserRegistration(formData);
    if (isPending) {
      //  handle loading state
    }
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Your name
            </label>
            <input
              {...register("name", { required: true })}
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="text"
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-[#ce4646]">This field is required</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Email address
            </label>
            <input
              {...register("email", { required: true })}
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="email"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="text-[#ce4646]">This field is required</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-[#ce4646]">This field is required</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#262626]/60">
              Your phone number
            </label>
            <input
              {...register("phone", { required: true })}
              className="px-4 py-2 border border-[#262626]/40 outline-none bg-transparent"
              type="text"
              placeholder="Your Number"
            />
            {errors.phone && (
              <span className="text-[#ce4646]">This field is required</span>
            )}
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

export default Page;
