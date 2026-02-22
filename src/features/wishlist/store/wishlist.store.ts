import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistProduct, WishlistResponse } from "../types/wishlist.type";

export interface WishlistState {
  count: number;
  data: WishlistProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  count: 0,
  data: [],
  isLoading: false,
  error: null,
};

const wislListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    setWishlistInfo: function (state, action: PayloadAction<WishlistResponse>) {
      state.data = action.payload.data;
      state.count = action.payload.count;
    },
  },
});

export const wishlistReducer = wislListSlice.reducer;
export const { setWishlistInfo } = wislListSlice.actions;
