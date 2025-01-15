"use server";
import envConfig from "@/app/config/envConfig";

export const getStreetProducts = async () => {
  const res = await fetch(`${envConfig.baseApi}/product?category=Street`);

  return res.json();
};
