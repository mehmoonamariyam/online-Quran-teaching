import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slice/courseSlice"; 
import LoginSlice from "./slice/FormSlices/login"; 
import SignupSlice from "./slice/FormSlices/signup";
import enrollSlice from "./slice/FormSlices/enroll";

import tutorsSlice from "./slice/TutorSlice";


export const store = configureStore({
  reducer: {
    courses: courseReducer,
    login: LoginSlice.reducer,
    signup: SignupSlice.reducer,
    enroll: enrollSlice.reducer,
    tutors : tutorsSlice.reducer,
  },
});
