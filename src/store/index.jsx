import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slice/courseSlice"; // your correct local path
import LoginSlice from "./slice/FormSlices/login"; // friend's addition

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    login: LoginSlice.reducer,
  },
});
