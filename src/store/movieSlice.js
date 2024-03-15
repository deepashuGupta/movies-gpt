import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetails, getTrailerById } from "./actions/movieAction";

const movieSlice = createSlice({
  name: "Movie Details",
  initialState: {
    nowPlaying: null,
    trailers: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    movieInfo: null,
    error: null,
    loading: false,
    trailerByID: ["dummy"],
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
  extraReducers(builder) {
    builder
      .addCase(getMovieDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movieInfo = action.payload;
      })
      .addCase(getTrailerById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTrailerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTrailerById.fulfilled, (state, action) => {
        state.loading = false;
        state.trailerByID = action.payload;
      });
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
