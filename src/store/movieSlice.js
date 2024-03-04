import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie Details",
  initialState: {
    nowPlaying: null,
    trailers: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailers: (state, action) => {
      state.trailers = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComings: (state, action) => {
      state.upComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addTrailers,
  addPopular,
  addTopRated,
  addUpComings,
} = movieSlice.actions;

export default movieSlice.reducer;
