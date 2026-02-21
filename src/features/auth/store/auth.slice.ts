import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type user = {
id:string,
name:string,
email?:string,
role:string
};


export type AuthState = {
   isAuthentication:boolean,
    userInfo:null|user, 
};

const initialState:AuthState = {
    isAuthentication:false,
    userInfo:null,
};

const authSlice = createSlice({
name:"auth",
initialState,
reducers:{
    setAuth: function(state,action:PayloadAction<AuthState>){
state.isAuthentication = action.payload.isAuthentication;
state.userInfo = action.payload.userInfo
    }
}

});

export const authReducer = authSlice.reducer
export const {setAuth} = authSlice.actions