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
    const { data } = await axios(option);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getToCart(): Promise<CartResponse> {
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
    const { data } = await axios(option);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function deleteFromCart(productId: string): Promise<CartResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      method: "DELETE",
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
export async function updateProductQuantity(
  productId: string,
  count: number,
): Promise<CartResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      method: "PUT",
      headers: {
        token,
      },
      data: {
        count,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function deleteAllCards(){
   const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/cart`,
      method: "DELETE",
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