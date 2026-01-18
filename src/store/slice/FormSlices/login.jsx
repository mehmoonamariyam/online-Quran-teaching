import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* ================= LOGIN THUNK ================= */
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // 🔥 IMPORTANT: check response type
      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("SERVER RETURNED HTML:", text);
        return rejectWithValue("Invalid server response");
      }

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || "Login failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Server error");
    }
  }
);

/* ================= INITIAL STATE ================= */
const initialState = {
  user: null,
  loading: false,
  error: null,
};

/* ================= SLICE ================= */
const LoginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;

        // ✅ SAVE AUTH DATA
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("role", action.payload.user.role);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = LoginSlice.actions;
export default LoginSlice;
