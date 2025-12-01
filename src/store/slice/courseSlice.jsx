import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk("courses",
  async()=>{
    const res = await fetch('http://localhost:8080/api/courses');
    const data = await res.json();
    return data;
  }
) ;

export const fetchSingleCourse = createAsyncThunk(
  "courses/fetchSingleCourse",
  async (id) => {
    const res = await fetch(`http://localhost:8080/api/courses/${id}`);
    if (!res.ok) throw new Error("Course not found");
    return await res.json();
  }
);

export const addCourse = createAsyncThunk(
  "courses/addcourse",
  async(courseData) => {
    const res = await fetch('http://localhost:8080/api/courses', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
       body: JSON.stringify(courseData),
    })
    return await res.json();
  }
)

export const updateCourse = createAsyncThunk(
  "courses/update",
  async ({ id, updatedData }) => {
    const res = await fetch(`http://localhost:8080/api/courses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData)
    });
    return await res.json();
  }
);

const initialState = {
  courses: [],
  currentCourse: null,
  loading: false,
  error: null
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // addCourse: (state, action) => {
    //   state.courses.push(action.payload);
    // },
    // updateCourse: (state, action) => {
    //   const index = state.courses.findIndex((c) => c.id === action.payload.id);
    //   if (index >= 0) state.courses[index] = action.payload;
    // },
    // deleteCourse: (state, action) => {
    //   state.courses = state.courses.filter((c) => c.id !== action.payload);
    // }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCourses.pending , (state)=>{
      state.loading = true;
    })
    .addCase(fetchCourses.fulfilled, (state, action) =>{
      state.loading = false;
      state.courses = action.payload;
    })
    .addCase(fetchCourses.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch courses";
      })
    .addCase(fetchSingleCourse.pending, (state) => {
      state.loading = true;
      state.currentCourse = null;
      })
    .addCase(fetchSingleCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCourse = action.payload;
      })
    .addCase(fetchSingleCourse.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch course";
      })
     .addCase(addCourse.pending, (state) => {
      state.loading = true;
      })
    .addCase(addCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.courses.push = action.payload;
      })
    .addCase(addCourse.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to add course";
      }) 
    .addCase(updateCourse.fulfilled, (state, action) => {
    state.loading = false;
    state.currentCourse = action.payload;
    const index = state.courses.findIndex(c => c._id === action.payload._id);
    if (index !== -1) {
      state.courses[index] = action.payload;
    }
  });
  }
});

// export const { addCourse, updateCourse, deleteCourse } = courseSlice.actions;
export default courseSlice;
