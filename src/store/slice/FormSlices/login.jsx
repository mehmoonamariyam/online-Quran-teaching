import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  async (userData, { rejectWithValue }) => {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        
            
            body: JSON.stringify(userData),
        
        
        });

        // If request fails , reject
        if (!response.ok) {
            const error = await response.text();
            return rejectWithValue(error || "Invalid login credentials");
        }

        // Otherwise, parse and return JSON data
        const data = await response.json();
        console.log("✅ Login successful, fetched data (string):", JSON.stringify(data, null, 2));
        return data;
    }
);
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
                    state.user = action.payload;
                })
                .addCase(loginUser.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload || "Login failed";
                });
        },
})
export default LoginSlice;