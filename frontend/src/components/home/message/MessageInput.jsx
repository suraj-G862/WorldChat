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
    <form className='px-4 my-3 ' onSubmit={handleSubmit}>
        <div className='w-full relative '>
            <input type="text" 
            className='border  text-sm rounded-lg block w-full p-2.5  border-gray-600'
            placeholder='Send Message' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
               {loading ? <div  className='loading loading-spinner'></div> : <div className="w-8 h-8 rounded-full p-1 hover:bg-blue-400"> <BiSend className='w-5 h-5 cursor-pointer'/> </div>}
           </button>
        </div>
    </form>
  )
}   

export default MessageInput
