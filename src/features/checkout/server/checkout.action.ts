"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { CheckoutForm } from "../schemas/checkout.schema";

export async function createCashOrder({
  cartId,
  shipingAddress,
}: {
  cartId: string;
  shipingAddress: CheckoutForm;
}) {
       const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/${cartId}
`,
      method: "POST",
      headers: {
        token,
      },
      data:{
        shipingAddress
      }
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createOnlineOrder({
  cartId,
  shipingAddress,
  url
}: {
  cartId: string;
  shipingAddress: CheckoutForm;
  url:string
}) {
       const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}

`,
      method: "POST",
      headers: {
        token,
      },
      data:{
        shipingAddress
      }
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    throw error;
  }
}