import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

export const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
  },
});
