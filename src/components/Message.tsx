import { FC } from 'react';
import { IMessage } from './Room';
import './message.scss';

type Props = {
  msg: IMessage;
}

const Message: FC<Props> = ({ msg }) => {
  const { message, time, msgID } = msg;

  console.log('msg', msg);

  return (
    <div className='message'>
      <div className="message__author_info">
        <img className='message__author_info_image' src='' alt='' />
        <h4 className='message__author_info_author'>{}</h4>
      </div>
      <div className='message__content'>
        <p>{message}</p>
      </div>
      {/* <span className='message__dateTime'>{time.getHours()}:{time.getMinutes()} {time.getDate()}.{time.getMonth()}.{time.getFullYear()}</span> */}
    </div>
  );
};

export default Message;

