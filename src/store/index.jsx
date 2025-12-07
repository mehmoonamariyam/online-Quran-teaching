import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slice/FormSlices/login"; 
import SignupSlice from "./slice/FormSlices/signup";
import enrollSlice from "./slice/FormSlices/enroll";
import tutorsSlice from "./slice/TutorSlice";
import courseSlice from "./slice/courseSlice";
// import courseReducer from "./slice/courseSlice";



export const store = configureStore({
  reducer: {
    courses : courseSlice.reducer,
    login: LoginSlice.reducer,
    signup: SignupSlice.reducer,
    enroll: enrollSlice.reducer,
    tutors : tutorsSlice.reducer,
  },
});
