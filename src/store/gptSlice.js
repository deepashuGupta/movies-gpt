import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Chat-GPT",
  initialState: {
    movieName: null,
    moviesData: null,
  },
  reducers: {
    addMovies: (state, action) => {
      const { moviesName, movieResultData } = action.payload;
      console.log(action.payload);
      state.movieName = moviesName;
      state.moviesData = movieResultData;
    },
  },
});

export const { addMovies } = GptSlice.actions;

export default GptSlice.reducer;
