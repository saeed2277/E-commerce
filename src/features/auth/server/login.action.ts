"use server";

import axios, { Axios, AxiosError, AxiosRequestConfig } from "axios";
import { LoginSchema, LoginSchemaType } from "../schemas/Login.schema";
import { da } from "zod/v4/locales";

export async function loginAction(Values: LoginSchemaType) {
  const validatedData = LoginSchema.safeParse(Values);
  if (!validatedData.success) {
    const errors: Record<string, string> = {};
    validatedData.error.issues.forEach((issue) => {
      const fieldName = issue.path[0] as string;
      const message = issue.message;

      if (!errors[fieldName]) {
        errors[fieldName] = message;




      }





    });

    return { success: false,
       message: "Validation failed",
      errors };
  }
try {

  const {rememberMe,...requestData}=validatedData.data
const options:AxiosRequestConfig = {
  url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
  method: "POST",
  data: requestData,
};
const{data}=await axios.request(options)

if(data.message==="success"){
  return {
  success:true,
  message:'Login successful',
  data,
}
}else{  
  return {
  success:false,
  message:'Login failed',
}
}
}catch (error) {
if(error instanceof AxiosError){
  const errorMessage = error.response?.data.message;
  if(errorMessage==="Incorrect email or password"){
    return {
      success: false,
      message: 'Incorrect email or password',
      errors: {
        password: 'Incorrect email or password',
      },
    };
  }
    }
  }











  return {success: false,
message: 'An error occurred during login',
  }

  };

