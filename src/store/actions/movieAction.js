import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_OPTION } from "../../utils/constant";

export const getMovieDetails = createAsyncThunk(
  "movie-detail",
  async (movieId) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        URL_OPTION
      );
      const json = await data.json();
      return json;
    } catch (error) {
      console.error(error);
      Promise.reject();
    }
  }
);

export const getTrailerById = createAsyncThunk(
  "trailer-by-id",
  async (movieId) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        URL_OPTION
      );
      const json = await data.json();
      const filterTrailer = json?.results.filter((t) => t.type === "Trailer");
      return filterTrailer;
    } catch (error) {
      console.error(error);
      Promise.reject();
    }
  }
);
