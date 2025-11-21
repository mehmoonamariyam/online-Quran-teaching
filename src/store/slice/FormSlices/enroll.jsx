import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitEnroll = createAsyncThunk("freeTrial/submitFreeTrial",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Submission failed");
      }
      const data = await res.json().catch(() => ({ message: "Submitted" }));
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Network error");
    }
  }
);


const enrollSlice = createSlice({
     name: "enroll",
  initialState: {
    loading: false,
    success: null,
    error: null,
  },
  reducers: {
    resetFreeTrialState: (state) => {
      state.loading = false;
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEnroll.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(submitEnroll.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload?.message || "Submitted successfully";
      })
      .addCase(submitEnroll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Submission failed";
      });
  },
})
export default enrollSlice;