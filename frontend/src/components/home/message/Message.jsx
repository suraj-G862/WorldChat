import React from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import useConversation from '../../../zustand/useConversation'

const  Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? ' chat-end' : ' chat-start';
  const profileImage = fromMe ? authUser.profilePicture : selectedConversation.profilePicture;
  const bubbleClass = fromMe ? 'bg-blue-500' : '';
  const shakeClass = message.shouldShake ? 'shake' : '';
  return ( 
    <div className={`chat ${chatClass}`}>
        <div className={`chat-image avatar`}>
            <div className="w-10 rounded-full">
                <img src={profileImage} alt="Messagers image" />
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

// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Messagers image" />
//             </div>
//         </div>
//         <div className="chat-bubble text-white bg-blue-500 ">Hi , Whats up ?</div>
//         <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center ">12:32</div>
//     </div>
//   )
// }

// export default Message