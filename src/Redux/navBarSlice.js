import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuButtonClicked: false,
  globalSearchValue: "",
  topFilters: [],
  currentTopFilterSelected: null,
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
    setTopFilters: (state, action) => {
      state.topFilters = action.payload;
    },
    setCurrentTopFilterSelected: (state, action) => {
      state.currentTopFilterSelected = action.payload;
    },
  },
});

//actions created by createSlice

export const {
  setMenuButtonClicked,
  setGlobalSearch,
  setTopFilters,
  setCurrentTopFilterSelected,
} = navBarSlice.actions;

export default navBarSlice.reducer;
