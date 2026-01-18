import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080/api/courses";

/* ================= FETCH ALL COURSES ================= */
export const fetchCourses = createAsyncThunk(
  "courses/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue("Failed to fetch courses");
    }
  }
);
/* ================= FETCH SINGLE COURSE ================= */
export const fetchSingleCourse = createAsyncThunk(
  "courses/fetchSingle",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue("Course not found");
    }
  }
);

/* ================= ADD COURSE (ADMIN) ================= */
export const addCourse = createAsyncThunk(
  "courses/add",
  async (courseData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      Object.entries(courseData).forEach(([k, v]) => {
        if (v) formData.append(k, v);
      });

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue("Failed to add course");
    }
  }
);

/* ================= UPDATE COURSE (ADMIN) ================= */
export const updateCourse = createAsyncThunk(
  "courses/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      Object.entries(updatedData).forEach(([k, v]) => {
        if (v) formData.append(k, v); // only append if value exists
      });

      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue("Failed to update course");
    }
  }
);

/* ================= DELETE COURSE (ADMIN) ================= */
export const deleteCourse = createAsyncThunk(
  "courses/delete",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error();
      return id;
    } catch {
      return rejectWithValue("Failed to delete course");
    }
  }
);

/* ================= SLICE ================= */
const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH ALL
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSingleCourse.pending, (state) => {
  state.loading = true;
  state.currentCourse = null;
})
.addCase(fetchSingleCourse.fulfilled, (state, action) => {
  state.loading = false;
  state.currentCourse = action.payload;
})
.addCase(fetchSingleCourse.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})

      // ADD
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.courses.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index !== -1) state.courses[index] = action.payload;
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter((c) => c._id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default courseSlice;
