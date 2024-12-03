import { configureStore } from "@reduxjs/toolkit";

import navBarSlice from "./navBarSlice";


export const store = configureStore({
  reducer: {
    navBarSlice: navBarSlice,
    
  },
});
