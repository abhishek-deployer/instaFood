
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./slice/profileSlice"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    // Add other reducers if needed
  },
});


export default store;