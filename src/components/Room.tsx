import { FC, useRef } from 'react';
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
  msgID: number;
  author: string;
  avatar: string;
};

const Room: FC = () => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const socket = useAppSelector(state => state.socket);
  const dispatch = useAppDispatch();

  const handleSendMsg = () => {
      if (messageRef.current !== null) { /* && messageRef.current.value !== '' */
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
        <div className="room__conversation">
          {socket.message && socket.message.map((msg: IMessage | any) => <Message key={msg.msgID} msg={msg}/>)}
        </div>
        <form className="room__message" onSubmit={e => e.preventDefault()}>
          <textarea className="room__message_textarea" placeholder='Enter your message' ref={messageRef} maxLength={100}></textarea>
          <button className="room__message_send_btn" onClick={handleSendMsg}><SendIcon sx={{ color: grey[500] }} fontSize='large' /></button>
        </form>
      </div>
  );
};

export default Room;


// const [messages, setMessages] = useState([] as IMessage[] | any);

// useEffect(() => {
  //   if (socket) setMessages((prev: any) => ([...prev, socket.message ]));
  // }, [socket]);