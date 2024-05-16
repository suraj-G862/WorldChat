import React, { useState } from 'react'
import Sidebar from '../../components/home/sidebar/Sidebar'
import MessageContainer from '../../components/home/message/MessageContainer'
import  useConversation  from '../../zustand/useConversation';


function Home() {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const wideview= window.innerWidth >= 700;
  if(wideview === true){
      return (
        <div className='flex h-full w-full rounded-lg overflow-hidden bg-clip-padding'>
            <Sidebar/>
            <MessageContainer/>
        </div>
      )
  }
  else{
    if(selectedConversation){
      return (
        <div className='h-full w-full rounded-lg overflow-hidden bg-clip-padding'>
            <MessageContainer/>
         </div>
      )
    }
    else{ 
      return (
        <div className="flex flex-col item-center justify-center w-full  ">
        <div className="w-full p-6 rounded-lg h-screen shadow-md bg-blue-50 bg-clip-padding ">
               <Sidebar />
        </div>
        </div>
      )
    }
  }
}

export default Home
