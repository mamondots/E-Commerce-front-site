/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUserLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending, isSuccess]);
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead subTitle="Account" headTitle="Account"></SeactionHead>
      </div>
      <div className="mt-20 flex justify-center items-center flex-col">
        <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-2xl font-bold">
          Login account
        </h2>
        <p className="mt-6 text-[#262626]/50">Please login account detail</p>
      </div>

      <div className="flex lg:px-96 px-10 flex-col mt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

          <div className="flex items-center justify-between">
            <input
              className="px-8 py-3 border border-[#262626] hover:bg-[#F57D4C] hover:text-[#fff] duration-300 cursor-pointer hover:border-transparent font-semibold uppercase text-sm tracking-widest"
              type="submit"
              value="sign in"
            />
            <p className="text-[#262626]/60 hover:text-[#F57D4C] duration-300 cursor-pointer">
              Forgot your password?
            </p>
          </div>
        </form>

        <div className="bg-[#262626] flex items-center justify-center gap-1 text-[#fff] py-7 mt-8">
          <h2>Don't have account?</h2>
          <Link
            href="/register"
            className="text-[#fff]/40 text-sm hover:text-[#F57D4C] cursor-pointer duration-300"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
