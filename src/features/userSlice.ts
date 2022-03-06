import { createSlice } from '@reduxjs/toolkit';

interface userState {
  access_token: string;
  refresh_token: string;
  user: { id: string; username: string };
}

const initialState: userState = {
  access_token: '',
  refresh_token: '',
  user: { id: '', username: '' },
};

const getUserSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.user.id = action.payload.user.id;
      state.user.username = action.payload.user.username;
    },
  },
});

// ações
export const { setUserData } = getUserSlice.actions;

// reducer para store
export default getUserSlice.reducer;
