import { configureStore } from "@reduxjs/toolkit";
import { authReducer, AuthState } from "../features/auth/store/auth.slice";
import { cartReducer, CartState } from "../features/cart/store/cart.slice";
import { useDispatch } from "react-redux";
import {
  wishlistReducer,
  WishlistState,
} from "../features/wishlist/store/wishlist.store";

export type prelodedState = {
  auth: AuthState;
  cart: CartState;
  wishlist: WishlistState;
};

export function createStore(preloadedState: prelodedState) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
      wishlist: wishlistReducer,
    },
    preloadedState,
  });

  return store;
}
export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
