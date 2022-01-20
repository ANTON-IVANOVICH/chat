import { FC, useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { sendMSG } from '../redux/socketSlice';
import Message from './Message';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import './room.scss';

export interface IMessage {
  text: string;
  time: Date;
  msgID: Date;
  author: string;
  avatar: string;
};

const Room: FC = () => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState([] as IMessage[] | any);
  const socket = useAppSelector(state => state.socket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (socket) setMessages((prev: any) => ([...prev, socket.message ]));
  }, [socket]);

  const handleSendMsg = () => {
    if (messageRef.current !== null) {
      const newMessage = messageRef.current.value;
      dispatch(sendMSG(newMessage));
      messageRef.current.value = '';
    };
  };

  return (
    <div className='room'>
      <div className="room__header">
        <img className='room__header_image' src="https://d2k.ru/upload/iblock/a79/ssk1200_1.jpg" alt="room icon" />
        <h2 className="room__header_title">Room name</h2>
        <button className="room__header_search"><SearchIcon sx={{ color: grey[500] }} fontSize='large' /></button>
        <button className="room__header_options"><MoreVertIcon sx={{ color: grey[500] }} fontSize='large' /></button>
      </div>
      <div className="room__chat">
        <ul className="room__conversation">
          {messages && messages.map((msg: IMessage) => <Message key={Math.floor(Math.random() * 99999)} msg={msg}/>)}
        </ul>
        <div className="room__message">
          <textarea placeholder='Enter your message' className="room__message_textarea" ref={messageRef} maxLength={100}></textarea>
          <button className="room__message_send_btn" onClick={handleSendMsg}><SendIcon sx={{ color: grey[500] }} fontSize='large' /></button>
        </div>
      </div>
    </div>
  );
};

export default Room;

