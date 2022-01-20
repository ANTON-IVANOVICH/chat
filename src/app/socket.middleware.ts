import { CaseReducerActions } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { io } from "socket.io-client";

export const createMySocketMiddleware = (socketActions: CaseReducerActions<{ newMsg: (state: WritableDraft<{ message: string; }>, payload: { payload: any; type: string; }) => void; newAutoMsg: (state: WritableDraft<{ message: string; }>, payload: { payload: any; type: string; }) => void; }>) => {
  return (storeAPI: { dispatch: (arg: { payload: any; type: string; }) => void; }) => {
    const socket = io();
    socket.on('connectMessage', (data: any) => {
      storeAPI.dispatch(socketActions.newAutoMsg(data))
    });

    socket.on('disconnectMessage', (data: any) => {
      storeAPI.dispatch(socketActions.newAutoMsg(data))
    });

    socket.on('msg', (data: any) => {
      storeAPI.dispatch(socketActions.newMsg(data))
    });

    return (next: (arg: { type: string; payload: any; }) => any) => (action: { type: string, payload: any }) => {
      if (action.type === "socket/msg") {
        socket.emit('msg', action.payload);
        return;
      }
      return next(action);
    }
  }
}
