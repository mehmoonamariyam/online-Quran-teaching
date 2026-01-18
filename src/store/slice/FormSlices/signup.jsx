import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SignupUser = createAsyncThunk(
  "signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
      });

      // 🔒 Safety check (HTML vs JSON issue fix)
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("HTML received instead of JSON:", text);
        return rejectWithValue("Server error. Invalid response.");
      }

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message || "Signup failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SignupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(SignupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // ✅ FIX
      });
  },
});

export default SignupSlice;
