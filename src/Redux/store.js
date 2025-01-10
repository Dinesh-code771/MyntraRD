import { configureStore } from "@reduxjs/toolkit";

import navBarSlice from "./navBarSlice.js";
import filterSlice from "./filterSlice.js";

export const store = configureStore({
  reducer: {
    navBarSlice: navBarSlice,
    filterSlice: filterSlice,
  },
});
