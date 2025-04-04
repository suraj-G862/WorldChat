import React, { useEffect , useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import  useConversation  from '../../../zustand/useConversation';
import { useAuthContext } from '../../../context/AuthContext'
import Image from '../sidebar/Image';
import { IoArrowBack } from "react-icons/io5";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const wideview = window.innerWidth >= 786;

  const handleback = () => {
    setSelectedConversation(null);
  };

  return (
    <div className={`w-full flex flex-col h-[101vh] -mt-8 -mr-4 `}>
      {!selectedConversation ? (
        <NoChatselected />
      ) : (
        <>
          <div className="py-2 mb-2 mt-8 flex bg-blue-400 h-16 ">
            {!wideview ? (<IoArrowBack className="w-4 h-4 my-auto ml-1" onClick={handleback}/>
            ) : ( "")}
            <span className="label-text">
              {/* <img src={selectedConversation.profilePicture} className="h-10 w-10 mx-3" alt="Profile"/> */}
              <Image conversation ={selectedConversation}/>
            </span> 
            <span className="text-gray-900 font-bold my-auto">
              {selectedConversation.fullName}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <div className='mb-0'>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};


export default MessageContainer

const NoChatselected = () =>{
  const {authUser} = useAuthContext();
  return(
      <>
        <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xlfont-semibold flex flex-col items-center gap-2 ">
          <p>Welcome 👋 {authUser.fullName} </p>
          <p>Select a chat to start Messaging</p>
          <TiMessages className="text-3xl md:text-6xl text-center"/>
        </div>
        </div>
      </>
  )
}

