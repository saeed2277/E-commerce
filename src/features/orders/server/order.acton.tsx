"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { OrdersResponse } from "../types/orderType";

export async function getUserOrder({id}:{id:string}):Promise<OrdersResponse>{
     const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
      method: "GET",
      headers: {
        token,
      },

    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    throw error;
  }
}