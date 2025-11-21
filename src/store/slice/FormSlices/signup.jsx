import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SignupUser = createAsyncThunk( "signup",   async (userData) => {
    const res = await fetch("https://dummyjson.com/users/add", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: 'Muhammad',
            lastName: 'Ovi',
            age: 250,
        })

    })
    if (!res.ok) throw new Error("Signup failed try again");
    const data = await res.json();
    return data;
});

const initialState = {
    user: null,
    loading: false,
    error: null,
};
export const SignupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
 },
 extraReducers: (builder) =>{
    builder
    .addCase(SignupUser.pending, (state)=>{
        state.loading= true;
        state.error= null;
    })
    .addCase(SignupUser.fulfilled, (state, action)=>{
state.loading= false;
state.user=action.payload;
    })
    .addCase(SignupUser.rejected, (state , action)=>{
state.loading= false;
state.error= action.error.message;
    })
 }
});

export default SignupSlice