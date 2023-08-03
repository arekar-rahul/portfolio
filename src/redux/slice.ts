import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyData } from "./types";

import data from "../json/data.json";

const initialState: MyData = data as MyData;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<MyData>) => {
      state = action.payload;
    },

  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer
