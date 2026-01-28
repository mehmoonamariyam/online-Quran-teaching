import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080/api/enroll"; // Backend endpoint

/* ===============================
   SUBMIT ENROLLMENT
================================ */
export const submitEnroll = createAsyncThunk(
  "enroll/submitEnroll",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        return rejectWithValue(text || "Enrollment failed");
      }

      if (!res.ok) {
        return rejectWithValue(data?.message || "Enrollment failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

/* ===============================
   FETCH ALL ENROLLMENTS (ADMIN)
================================ */
export const fetchEnrollments = createAsyncThunk(
  "enroll/fetchEnrollments",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(API_URL); // GET all enrollments
      const contentType = res.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        return rejectWithValue(text || "Failed to fetch enrollments");
      }

      if (!res.ok) {
        return rejectWithValue(data?.message || "Failed to fetch enrollments");
      }

      return data; // array of enrollments
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

/* ===============================
   SLICE
================================ */
const enrollSlice = createSlice({
  name: "enroll",
  initialState: {
    loading: false,
    success: null,
    error: null,
    enrollments: [], // 🔹 admin data
    fetchLoading: false,
    fetchError: null,
  },
  reducers: {
    resetEnrollState: (state) => {
      state.loading = false;
      state.success = null;
      state.error = null;
    },
    resetEnrollmentsState: (state) => {
      state.enrollments = [];
      state.fetchLoading = false;
      state.fetchError = null;
    },
  },
  extraReducers: (builder) => {
    /* SUBMIT */
    builder
      .addCase(submitEnroll.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(submitEnroll.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload?.message || "Enrollment submitted successfully";
      })
      .addCase(submitEnroll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Enrollment failed";
      });

    /* FETCH ALL ENROLLMENTS */
    builder
      .addCase(fetchEnrollments.pending, (state) => {
        state.fetchLoading = true;
        state.fetchError = null;
      })
      .addCase(fetchEnrollments.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.enrollments = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchEnrollments.rejected, (state, action) => {
        state.fetchLoading = false;
        state.fetchError = action.payload || "Failed to fetch enrollments";
      });
  },
});

export const { resetEnrollState, resetEnrollmentsState } = enrollSlice.actions;
export default enrollSlice;
