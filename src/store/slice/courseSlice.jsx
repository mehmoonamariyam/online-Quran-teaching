import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../components/courses/API";

const initialState = {
  courses: API
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.courses.findIndex(c => c.id === action.payload.id);
      if (index >= 0) state.courses[index] = action.payload;
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(c => c.id !== action.payload);
    }
  }
});

export const { addCourse, updateCourse, deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;
