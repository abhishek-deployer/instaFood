// profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    username: 'dffdsf',
    name: 'default',
  },
  reducers: {
    setProfile: (state, action) => {
        const { username, name } = action.payload;
        console.log("set profile", username, name);
        
        state.username = username;
        state.name = name;
      
        console.log("now update username is",state.username)
      },
  },
});

export const { setProfile } = profileSlice.actions;
export const selectProfile = (state) => state.profile;
export default profileSlice.reducer;
