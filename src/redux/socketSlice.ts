import { createAction, createSlice } from '@reduxjs/toolkit';

export const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    message: 'Welcome to the club, buddy',
  },
  reducers: {
    newMsg: (state, payload) => {
      state.message = payload.payload;
    },
    newAutoMsg: (state, payload) => {
      state.message = payload.payload;
    },
  },
});

export const socketActions = socketSlice.actions;
export const sendMSG = createAction<any>('socket/msg');
export default socketSlice.reducer;
