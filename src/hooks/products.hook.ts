"use client";
import { getCategories, getProduct, getProducts } from "@/services/AllProducts";
import { useQuery } from "@tanstack/react-query";

// export const useGetProducts = () => {
//   return useQuery({
//     queryKey: ["GET_PRODUCTS"], // Add dynamic values here if needed
//     queryFn: ({ queryKey }) => {
//       const queryParam = queryKey[1] || ""; // Extract query param from the second item in the key
//       return getProducts(queryParam);
//     },
//   });
// };

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["GET_PRODUCTS"], // Add dynamic values here if needed
    queryFn: getProducts,
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["GET_PRODUCT", id], // Add dynamic values here if needed
    queryFn: async () => await getProduct(id),
    enabled: !!id,
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: getCategories,
  });
};
