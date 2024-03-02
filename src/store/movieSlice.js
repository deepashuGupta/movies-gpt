import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie Details",
  initialState: {
    nowPlaying: null,
    trailers: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailers: (state, action) => {
      state.trailers = action.payload;
    },
  },
});

export const { addNowPlaying, addTrailers } = movieSlice.actions;

export default movieSlice.reducer;
