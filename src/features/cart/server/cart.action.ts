"use server";

import axios, { AxiosRequestConfig } from "axios"; 
import { cookies } from "next/headers";
import { CartResponse } from "../types/cart.type";

export async function addToCart({ productId }: { productId: string }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }

  try {
    const option: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/cart",
      method: "POST",
      headers: {
        token,
      },
      data: {
        productId,
      },
    };
    const {data} = await axios(option);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getToCart():Promise<CartResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
    if (!token) {
      throw new Error("User is not authenticated");
    }
    try {
        const option: AxiosRequestConfig = {
          url: "https://ecommerce.routemisr.com/api/v1/cart",
          method: "GET",
          headers: {
            token,
          },
        };
        const {data} = await axios(option);
        return data;
    } catch (error) {
        throw error;
    }
}