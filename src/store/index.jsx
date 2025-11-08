import { configureStore } from "@reduxjs/toolkit";

import courseReducer from "../components/courses/courseSlice"; // fixed path
import LoginSlice from "./slice/FormSlices/login";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    login: LoginSlice.reducer
  },
});

