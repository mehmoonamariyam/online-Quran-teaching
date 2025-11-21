import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTutors } from "../../../components/OurTutors/TutorsAPI";


// Async thunk
export const getTutors = createAsyncThunk("tutors/fetchTutors", async () => {
  const data = await fetchTutors();
  return data;
});

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: { tutors: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTutors.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(getTutors.fulfilled, (state, action) => { state.loading = false; state.tutors = action.payload; })
      .addCase(getTutors.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});

export default tutorsSlice;
