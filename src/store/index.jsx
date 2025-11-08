import { configureStore } from "@reduxjs/toolkit";

import courseReducer from "../components/courses/courseSlice"; // fixed path

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

