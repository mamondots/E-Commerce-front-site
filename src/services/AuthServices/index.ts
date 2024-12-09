/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import AxiosInstance from "@/lib/AxiosInstance";
// import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", userData);

    if (data.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", userData);

    if (data.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const logout = () => {
//   cookies().delete("accessToken");
//   cookies().delete("refreshToken");
// };

// export const getCurrentUser = async () => {
//   const accessToken = cookies().get("accessToken")?.value;

//   let decodedToken = null;

//   if (accessToken) {
//     decodedToken = await jwtDecode(accessToken);
//     return {
//       _id: decodedToken._id,
//       name: decodedToken.name,
//       email: decodedToken.email,
//       mobileNumber: decodedToken.mobileNumber,
//       role: decodedToken.role,
//       status: decodedToken.status,
//       profilePhoto: decodedToken.profilePhoto,
//     };
//   }

//   return decodedToken;
// };