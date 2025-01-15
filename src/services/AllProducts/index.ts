/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import AxiosInstance from "@/lib/AxiosInstance";

export const getProducts = async () => {
  try {
    const { data } = await AxiosInstance.get("/product");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getProduct = async (id: string) => {
  try {
    const { data } = await AxiosInstance.get(`/product/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// const getProducts = async (queryParam) => {
//   const response = await fetch(`/api/products${queryParam}`);
//   console.log("Response:", response);

//   const result = await response.json();
//   console.log("Parsed Result:", result);

//   return result;
// };

export const getCategories = async () => {
  try {
    const { data } = await AxiosInstance.get("/category");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
