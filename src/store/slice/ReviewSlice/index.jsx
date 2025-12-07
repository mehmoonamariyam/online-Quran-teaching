import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET reviews
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    const res = await fetch("http://localhost:8080/api/reviews");
    return await res.json();
  }
);

// ADD review
export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (data) => {
    const res = await fetch("http://localhost:8080/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
);

// DELETE review
export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id) => {
    await fetch(`http://localhost:8080/api/reviews/${id}`, {
      method: "DELETE",
    });
    return id; // return id to remove from store
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter(
          (review) => review._id !== action.payload
        );
      });
  },
});

export default reviewSlice;
