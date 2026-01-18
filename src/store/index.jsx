import { configureStore } from "@reduxjs/toolkit";
 
import SignupSlice from "./slice/FormSlices/signup";
import enrollSlice from "./slice/FormSlices/enroll";
import tutorsSlice from "./slice/TutorSlice";

import reviewSlice from "./slice/ReviewSlice";
import courseSlice from "./slice/courseSlice";
import LoginSlice from "./slice/FormSlices/login";
import userSlice from "./slice/UserSlice.jsx/userslice";




export const store = configureStore({
  reducer: {
    courses : courseSlice.reducer,
    login: LoginSlice.reducer,
    signup: SignupSlice.reducer,
    enroll: enrollSlice.reducer,
    tutors : tutorsSlice.reducer,
    reviews: reviewSlice.reducer,
    users: userSlice.reducer,
  },
});
