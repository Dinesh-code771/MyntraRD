import { configureStore } from "@reduxjs/toolkit";

import navBarSlice from "./navBarSlice.js";
import filterSlice from "./filterSlice.js";
import wishListSlice from "./wishListSlice.js";

export const store = configureStore({
  reducer: {
    navBarSlice: navBarSlice,
    filterSlice: filterSlice,
    wishListSlice: wishListSlice,
  },
});
