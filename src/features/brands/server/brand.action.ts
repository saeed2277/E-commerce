"use server";

import axios, { AxiosRequestConfig } from "axios";
import { BrandsResponse, SingleBrandsResponse } from "../types/brand.type";

export async function getBrands(): Promise<BrandsResponse> {
  try {
    const options: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/brands`,
      method: "GET",
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getBrandsById({
  id,
}: {
  id: string;
}): Promise<SingleBrandsResponse> {
  try {
    const options: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
      method: "GET",
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getProductsByBrandId({ brandId }: { brandId: string }) {
  try {
    const options: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`,
      method: "GET",
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error fetching products by brand:", error);
    return { data: [] };
  }
}