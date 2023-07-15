import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};
const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setBurrow: (state, { payload }) => {
      state.review = payload;
    },
  },
});

const { reducer, actions } = reviewSlice;

export const { setReviews } = actions;
export default reducer;
