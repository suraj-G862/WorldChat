import React, { useEffect, useState } from 'react'
import Message from './Message'
import useGetMessages from '../../../hooks/useGetMessages'
import { useRef } from 'react';
import useListenMessages from '../../../hooks/useListenMessages';

const Messages = () => {
  const {messages, loading} = useGetMessages();
  // const [messagelength, setMessagelength] = useState(messages.length);
  useListenMessages();
  const lastMessageRef = useRef();
  
  useEffect(() => {
    setTimeout(() => {
         lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    },100) 
  } ,[messages])
  return (
    // <div className= {`px-4 flex-1 overflow-auto {messages.length===0 && pt-0 } `}>
    <div className= {`px-4 flex-1 overflow-auto `}>
         {!loading && messages.length > 0 && messages.map((message) => (<div key={message._id} ref={lastMessageRef} ><Message message={message}/> </div>))}
         {!loading && messages.length === 0 && (<div className='text-center  font-semibold'>Send a message to start Conversation</div>)}
         {loading && <div className='loading loading-spinner'></div>}
    </div>
  )
} 

export default Messages
