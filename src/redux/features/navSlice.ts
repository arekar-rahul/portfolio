import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenState {
  screen: string;
  isScreenLoaded: boolean;
}

const initialState: ScreenState = {
  screen: "mainPage",
  isScreenLoaded: false,
};

const navigationSlice = createSlice({
  name: "NavigationScreen",
  initialState,
  reducers: {
    navScreen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload;
    },
    loadScreen: (state, action: PayloadAction<boolean>) => {
      state.isScreenLoaded = action.payload;
    },
  },
});

export const { navScreen, loadScreen } = navigationSlice.actions;
export default navigationSlice.reducer;
