"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { WishlistResponse } from "../types/wishlist.type";


export async function addToWishlist({ productId }: { productId: string }) {
    const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }

  try {
    const option: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/wishlist",
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

export async function getLoggedUserWishlist():Promise<WishlistResponse>{
    const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/wishlist",
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

export async function deleteFromWishlist(productId: string): Promise<WishlistResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
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