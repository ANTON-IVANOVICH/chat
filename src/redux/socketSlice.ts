import { createAction, createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

// export interface SocketSliceReducersActions {
//   newMsg: (state: WritableDraft<{}>, { payload }: { payload: any; type: string; }, ) => void;
//   newAutoMsg:(state: WritableDraft<{}>, { payload }: { payload: any; type: string; }, ) => void;
//   newUser:(state: WritableDraft<{}>, { payload }: { payload: any; type: string; }, ) => void;
// };

export const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    message: '',
    time: 0,
    msgID: 0,
    author: '',
    avatar: '',
  },
  reducers: {
    newAutoMsg: (state, payload) => {
      console.log('payload from slice -> reducers -> newAutoMsg', payload);
      console.log('state from slice -> reducers -> newAutoMsg', state);
    },
    newMsg: (state, payload) => {
      console.log('payload from slice -> reducers -> newMsg', payload);
      console.log('state from slice -> reducers -> newMsg', state);
    },
  },
});

export const socketActions = socketSlice.actions;
export const sendMSG = createAction<any>('socket/msg');
export default socketSlice.reducer;
