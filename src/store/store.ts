import { configureStore } from "@reduxjs/toolkit";
import { authReducer, AuthState } from "../features/auth/store/auth.slice";
import { cartReducer, CartState } from "../features/cart/store/cart.slice";
import { useDispatch, useSelector } from "react-redux";

export type prelodedState = {
  auth: AuthState;
  cart: CartState;
};

export function createStore(preloadedState: prelodedState) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
    },
    preloadedState,
  });

  return store;
}
export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
