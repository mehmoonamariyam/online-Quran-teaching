import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080/api/tutors";

/* ================= FETCH ALL TUTORS ================= */
export const getTutors = createAsyncThunk(
  "tutors/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch tutors");
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

/* ================= ADD TUTOR ================= */
export const addTutor = createAsyncThunk(
  "tutors/add",
  async (tutorData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tutorData),
      });

      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await res.json();
          return rejectWithValue(errorData.message || "Failed to add tutor");
        } else {
          const text = await res.text();
          return rejectWithValue("Server returned HTML: " + text);
        }
      }

      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message || "Failed to add tutor");
    }
  }
);

/* ================= UPDATE TUTOR ================= */
export const updateTutor = createAsyncThunk(
  "tutors/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await res.json();
          return rejectWithValue(errorData.message || "Failed to update tutor");
        } else {
          const text = await res.text();
          return rejectWithValue("Server returned HTML: " + text);
        }
      }

      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message || "Failed to update tutor");
    }
  }
);

/* ================= DELETE TUTOR ================= */
export const deleteTutor = createAsyncThunk(
  "tutors/delete",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete tutor");
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

/* ================= SLICE ================= */
const tutorsSlice = createSlice({
  name: "tutors",
  initialState: {
    tutors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(getTutors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTutors.fulfilled, (state, action) => {
        state.loading = false;
        state.tutors = action.payload;
      })
      .addCase(getTutors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addTutor.fulfilled, (state, action) => {
        state.tutors.push(action.payload);
      })
      .addCase(addTutor.rejected, (state, action) => {
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateTutor.fulfilled, (state, action) => {
        const index = state.tutors.findIndex((t) => t._id === action.payload._id);
        if (index !== -1) state.tutors[index] = action.payload;
      })
      .addCase(updateTutor.rejected, (state, action) => {
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteTutor.fulfilled, (state, action) => {
        state.tutors = state.tutors.filter((t) => t._id !== action.payload);
      })
      .addCase(deleteTutor.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default tutorsSlice;
