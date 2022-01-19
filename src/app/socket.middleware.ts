import { CaseReducerActions } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { io } from "socket.io-client";
//@ts-ignore
export const createMySocketMiddleware = (socketActions) => {
  //@ts-ignore
  return (storeAPI) => {
    const socket = io();
    console.log(socketActions);
    
    //@ts-ignore
    // storeAPI.dispatch(socketActions[message.action](message))
    socket.on('connectMessage', (data: any) => {
      console.log('AUTOMSG - CONNECT from server', data);
      storeAPI.dispatch(socketActions.newAutoMsg(data))
    });

    socket.on('disconnectMessage', (data: any) => {
      console.log('AUTOMSG - DISCONNECT from server', data);
      storeAPI.dispatch(socketActions.newAutoMsg(data))
    });

    socket.on('msg', (data: any) => {
      console.log('msg from server', data);
      storeAPI.dispatch(socketActions.newMsg(data))
    });

    //@ts-ignore
    return (next: (arg)) => (action: { type, payload }) => {
      if (action.type === "socket/msg") {
        socket.emit('msg', action.payload);
        return;
      }
      // switch (action.type) {
      //   case 'socket/msg':
      //     socket.emit('msg', action.payload);
      //     return;
      //   case 'socket/connectMessage':

      //   case 'socket/disconnectMessage':

      //   default:
      //     break;
      // }

      return next(action);
    }
  }
}
