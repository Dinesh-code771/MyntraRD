import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuButtonClicked: false,
  
};

export const navBarSlice = createSlice({
  name: "navBar",
  initialState: initialState,
  reducers: {
    setMenuButtonClicked: (state, action) => {
      state.isMenuButtonClicked = action.payload;
    },
  },
});

//actions created by createSlice

export const { setMenuButtonClicked } = navBarSlice.actions;

export default navBarSlice.reducer;
