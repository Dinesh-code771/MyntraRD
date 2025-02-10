import { setRef } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  refetch: false,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: initialState,
  reducers: {
    addToWishList: (state, action) => {
      console.log("action", action);
      state.wishList.push(action.payload);
    },
    setWishList: (state, action) => {
      state.wishList = action.payload;
    },
    resetWishList: (state, action) => {
      state.wishList = action.payload;
    },
    setRefetch: (state, action) => {
      state.refetch = action.payload;
    },
  },
});

//actions created by createSlice

export const { addToWishList, setWishList, setRefetch, resetWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
