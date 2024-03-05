import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import appConfigSlice from "./appConfigSlice";

export const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    appConfig: appConfigSlice,
  },
});
