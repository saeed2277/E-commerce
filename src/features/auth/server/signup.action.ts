"use server";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { formData, SignupSchema } from "../schemas/Signup.schema";
import { toast } from "react-toastify";


export default async function signupAction(values: formData) {
  const validationResult = SignupSchema.safeParse(values);
  if (!validationResult.success) {
    const errors: Record<string, string> = {};

    if (validationResult.error) {
      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        const message = issue.message;
        if (!errors[field]) {
          errors[field] = message;
        }
      });

      return { 
        success: false,
        message: "validation errors",
        errors
        };
    }

  }
  const {terms, ...restValues} = values;
    try {
        const options:AxiosRequestConfig = {
          url: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
          method: 'POST',
          data: restValues,
        }
        const {data} = await axios.request(options);
if (data.message === "success") {
    return {
        success: true,
        message: "Account created successfully",
        data
    };
}

return {
    success: false,
    message: data.message || "Signup failed",
};

    } catch (error) {
if (error instanceof AxiosError) {
  const errorMessage = error.response?.data?.message 
  if(errorMessage === "Account Already Exists") {
    return {
        success: false,
        message: "Account already exists",
        errors: { email: "email already exists" }
}

    }
}}};
