import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// --- Async thunks ---

// Fetch all tutors
export const getTutors = createAsyncThunk("tutors/fetchTutors", async () => {
  const res = await fetch("http://localhost:8080/api/tutors");
  const data = await res.json();
  // Map _id to id for frontend usage
  return data.map((t) => ({ ...t, id: t._id }));
});

// Add new tutor
export const addTutor = createAsyncThunk(
  "tutors/addTutor",
  async (tutorData) => {
    const res = await fetch("http://localhost:8080/api/tutors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tutorData),
    });
    const data = await res.json();
    return { ...data, id: data._id }; // map _id to id
  }
);

// Update existing tutor
export const updateTutor = createAsyncThunk(
  "tutors/updateTutor",
  async ({ id, data }) => {
    const res = await fetch(`http://localhost:8080/api/tutors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const updated = await res.json();
    return { ...updated, id: updated._id }; // map _id to id
  }
);

// Delete tutor
export const deleteTutor = createAsyncThunk(
  "tutors/deleteTutor",
  async (id) => {
    await fetch(`http://localhost:8080/api/tutors/${id}`, { method: "DELETE" });
    return id; // return id to remove from state
  }
);

// --- Slice ---
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
      // GET tutors
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
        state.error = action.error.message;
      })

      // ADD tutor
      .addCase(addTutor.fulfilled, (state, action) => {
        state.tutors.push(action.payload);
      })

      // UPDATE tutor
      .addCase(updateTutor.fulfilled, (state, action) => {
        const index = state.tutors.findIndex((t) => t.id === action.payload.id);
        if (index >= 0) state.tutors[index] = action.payload;
      })

      // DELETE tutor
      .addCase(deleteTutor.fulfilled, (state, action) => {
        state.tutors = state.tutors.filter((t) => t.id !== action.payload);
      });
  },
});

export default tutorsSlice;
