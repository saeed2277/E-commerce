'use server'

import axios, { AxiosRequestConfig } from "axios";

export async function forgetPasswordAction(email: string) {
try {
     const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
      method: "POST",
      data: { email },
    };
    const { data } = await axios.request(options);
    return { success: true, data };
} catch (error: any) {
return { 
      success: false, 
      message: error.response?.data?.message || "An error occurred while sending the reset code" 
    };
}
}
export async function verifyResetCodeAction(email: string, resetCode: string) {
try {
     const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      method: "POST",
      data: { email, resetCode },
    };
    const { data } = await axios.request(options);
    return { success: true, data };
} catch (error: any) {
return { 
      success: false, 
      message: error.response?.data?.message || "An error occurred while verifying the reset code" 
    };
}
}