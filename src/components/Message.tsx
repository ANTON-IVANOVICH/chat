import { FC } from 'react';
import { IMessage } from './Room';
import { format } from 'date-fns'
import './message.scss';

type Props = {
  msg: IMessage;
};

const date = format(new Date(), 'HH:mm');

const Message: FC<Props> = ({ msg }) => {
  if (typeof msg === 'string') {
    return (
      <div className='message'>
        <div className='message__content'>
          <p>{msg}</p>
        </div>
        <span className='message__dateTime'>{date}</span>
      </div>
    );
  } else {
    const { text, author, avatar } = msg;

    return (
      <div className='message'>
        <div className="message__author_info">
          <img className='message__author_info_image' src={avatar} alt={author} />
          <h4 className='message__author_info_author'>{author}</h4>
        </div>
        <div className='message__content'>
          <p>{text}</p>
        </div>
        <span className='message__dateTime'>{date}</span>
      </div>
    );
  }
};

export default Message;

// eslint-disable-next-line no-lone-blocks
{/* <span className='message__dateTime'>{formatTime.getHours()}:{formatTime.getMinutes()} {formatTime.getDate()}.{formatTime.getMonth()+1}.{formatTime.getFullYear()}</span> */}
