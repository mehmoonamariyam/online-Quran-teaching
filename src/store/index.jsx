import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slice/courseSlice"; // fixed path

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});
