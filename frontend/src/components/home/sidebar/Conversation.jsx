import React from 'react'
import useConversation from '../../../zustand/useConversation'
import { useSocketContext } from '../../../context/SocketContext';
import Image from './Image';
import { useState } from 'react';

const Conversation = ({conversation,LastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

  return ( 
    <div>
        <div className={`${isSelected ? "bg-sky-400": ""} flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer`}
             onClick={()=> setSelectedConversation(conversation)} 
        >
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <Image conversation={conversation}/>
            </div> 
            <div className="flex flex-col flex-1">
                 <div className='flex gap-3 justify-between'>
                     <p className='font-bold'>{conversation.fullName}</p>
                 </div>
            </div>
        </div>
        {!LastIdx && <div className='divider my-0 py-0 h-1 '/>}
    </div>
  )
}

export default  Conversation 
