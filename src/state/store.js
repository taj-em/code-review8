import { configureStore } from "@reduxjs/toolkit";
import sackControlReducer from "./sackControl/sackControlSlice";

export const store = configureStore({
  reducer: {
    sackControl: sackControlReducer,
  }
})