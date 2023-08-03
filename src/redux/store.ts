// store.ts

import { configureStore } from "@reduxjs/toolkit";
import dataReducers from "./slice"; // Import the default object from the slice
import navReducers from "./features/navSlice";

const store = configureStore({
  reducer: {
    dataReducer: dataReducers,
    navReducer: navReducers,
  }, // Use the imported reducers object for store configuration
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
