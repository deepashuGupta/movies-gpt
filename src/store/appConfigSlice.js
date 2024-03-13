import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
  name: "appConfig",
  initialState: {
    isGPTSearch: false,
    selectedLanguage: "en",
  },
  reducers: {
    showGptSearh: (state, action) => {
      state.isGPTSearch = action.payload;
    },
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { showGptSearh, setLanguage } = appConfig.actions;

export default appConfig.reducer;
