import { FC, useState, useRef, useEffect } from 'react';
import Message from './Message';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { sendMSG } from '../redux/socketSlice';
import './room.scss';

export interface IMessage {
  message: string;
  time: Date;
  msgID: Date;
  author: string;
  avatar: string;
};

const Room: FC = () => {
  const [messages, setMessages] = useState([] as IMessage[]);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const socket = useAppSelector(state => state.socket);
  const dispatch = useAppDispatch();

  const handleSendMsg = () => {
    if (messageRef.current !== null) {
      const newMessage = messageRef.current.value;
      dispatch(sendMSG(newMessage));
      messageRef.current.value = '';
      console.log('messages[]', messages);
      console.log('socket', socket);
      console.log('dispatch', dispatch);
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
        <div className="room__conversation">
          {messages && messages.map(msg => <Message key={Number(msg.time)} msg={msg}/>)}
        </div>
        <div className="room__message">
          <textarea placeholder='Message' className="room__message_textarea" ref={messageRef}></textarea>
          <button className="room__message_send_btn" onClick={handleSendMsg}><SendIcon sx={{ color: grey[500] }} fontSize='large' /></button>
        </div>
      </div>
    </div>
  );
};

export default Room;

