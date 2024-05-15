import React from 'react'
import { BiSend } from "react-icons/bi";
import { useState } from 'react'
import useSendMessage from '../../../hooks/useSendMessage.js';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const {sendMessage, loading} = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return ;
    await sendMessage(message);
    setMessage(''); 
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" 
            className='border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            placeholder='Send Message' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white w-8 h-8 rounded-full m-auto mr-1  hover:bg-blue-500'>
               {loading ? <div  className='loading loading-spinner'></div> :  <BiSend className='w-5 h-5'/> }
           </button>
        </div>
    </form>
  )
}   

export default MessageInput

// import React from 'react'
// import { BiSend } from "react-icons/bi";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type="text" className='border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send Message' />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white w-8 h-8 rounded-full m-auto mr-1  hover:bg-blue-500'>
//                <BiSend className='w-5 h-5'/>
//            </button>
//         </div>
//     </form>
//   )
// }   

// export default MessageInput