import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuButtonClicked: false,
  globalSearchValue: "",
};

export const navBarSlice = createSlice({
  name: "navBar",
  initialState: initialState,
  reducers: {
    setMenuButtonClicked: (state, action) => {
      state.isMenuButtonClicked = action.payload;
    },
    setGlobalSearch: (state, action) => {
      state.globalSearchValue = action.payload;
    },
  },
});

//actions created by createSlice

export const { setMenuButtonClicked, setGlobalSearch } = navBarSlice.actions;

export default navBarSlice.reducer;
