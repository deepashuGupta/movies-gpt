import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
  name: "appConfig",
  initialState: {
    isGPTSearch: false,
    selectedLanguage: "en",
    showPopUp: false,
  },
  reducers: {
    showGptSearh: (state, action) => {
      state.isGPTSearch = action.payload;
    },
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    setShowPopUp: (state, action) => {
      state.showPopUp = action.payload;
    },
  },
});

export const { showGptSearh, setLanguage, setShowPopUp } = appConfig.actions;

export default appConfig.reducer;
