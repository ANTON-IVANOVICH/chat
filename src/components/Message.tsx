import { FC } from 'react';
import { IMessage } from './Room';
import './message.scss';
// import moment from 'moment';

type Props = {
  msg: IMessage;
}

const Message: FC<Props> = ({ msg }) => {
  if (typeof msg === 'string') {
    const message = msg;
    const currentTime = new Date();

    return (
      <li className='message'>
        <div className='message__content'>
          <p>{message}</p>
        </div>
        <span className='message__dateTime'>{currentTime.getHours()}:{currentTime.getMinutes()} {currentTime.getDate()}.{currentTime.getMonth()+1}.{currentTime.getFullYear()}</span>
      </li>
    );
  } else {
    const { text, time, msgID, author, avatar } = msg;
    const formatTime = new Date(time)

    return (
      <li className='message'>
        <div className="message__author_info">
          <img className='message__author_info_image' src={avatar} alt={author} />
          <h4 className='message__author_info_author'>{author}</h4>
        </div>
        <div className='message__content'>
          <p>{text}</p>
        </div>
        <span className='message__dateTime'>{formatTime.getHours()}:{formatTime.getMinutes()} {formatTime.getDate()}.{formatTime.getMonth()+1}.{formatTime.getFullYear()}</span>
      </li>
    );
  }
};

export default Message;

