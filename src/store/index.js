import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});
