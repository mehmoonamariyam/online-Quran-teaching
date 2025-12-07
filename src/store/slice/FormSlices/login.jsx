import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  async (userData, { rejectWithValue }) => {
        const response = await fetch("http://localhost:8080/login/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        
            
            body: JSON.stringify(userData),
        
        
        });
        const data = await response.json();

    
        if (!data.token) {
        return rejectWithValue(data.message || "Invalid login credentials");
      }

      console.log("✅ Login successful:", data);
      return data;
});
const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const LoginSlice = createSlice({
    name: "login",
    initialState,

    reducers: {
        logout: (state) => {
            state.user = null;

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
                    localStorage.setItem("token", action.payload.token);
                })
                .addCase(loginUser.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload || "Login failed";
                });
        },
})
export default LoginSlice;