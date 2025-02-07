import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
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
    resetWishList: (state,action) => {
      state.wishList = action.payload;
    },
  },
});

//actions created by createSlice

export const { addToWishList, setWishList, resetWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
