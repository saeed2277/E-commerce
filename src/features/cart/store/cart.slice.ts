import { createSlice} from "@reduxjs/toolkit";
import { CartProduct } from "../types/cart.type";

export interface CartState {
  numOfCartItems: number;
  cartId: string | null;
  products: CartProduct[];
  totalCartPrice: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: CartState = {
  numOfCartItems: 0,
  cartId: null,
  products: [],
  totalCartPrice: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export const cartReducer= cartSlice.reducer;