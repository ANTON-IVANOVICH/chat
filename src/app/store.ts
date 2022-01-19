import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import socketReducer, {socketActions} from '../redux/socketSlice';
import { createMySocketMiddleware } from './socket.middleware';

const socketMiddleware = createMySocketMiddleware(socketActions);

export const store = configureStore({
  reducer: {
    socket: socketReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
