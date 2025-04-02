import React from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import useConversation from '../../../zustand/useConversation'
import Image from '../sidebar/Image';

const  Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? ' chat-end' : ' chat-start';
  const profile = fromMe ? authUser: selectedConversation;
  const bubbleClass = fromMe ? 'bg-blue-500' : '';
  const shakeClass = message.shouldShake ? 'shake' : '';
  return ( 
    <div className={`chat ${chatClass}`}>
        <div className={`chat-image avatar`}>
            <div className="w-10 rounded-full">
                <Image conversation ={profile}/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleClass} ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center ">
          {extractTime(message.createdAt)} 
        </div>
    </div>
  )
}
 
export default Message

function extractTime(dateString){
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(number){
  return number.toString().padStart(2, '0');
}