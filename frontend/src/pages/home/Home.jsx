import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/home/sidebar/Sidebar'
import MessageContainer from '../../components/home/message/MessageContainer'
import  useConversation  from '../../zustand/useConversation';


function Home() {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const [wideview, setWideview] = useState(window.innerWidth >= 786);

  useEffect(() => {
    const handleResize = () => {
      setWideview(window.innerWidth >= 786);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if(wideview === true){
      return (
        <div className='flex h-full w-full rounded-lg  overflow-visible bg-clip-padding'>
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
        <div className="flex flex-col item-center justify-center w-full bg-blue-50  ">
        <div className="w-full rounded-lg ">
               <Sidebar />
        </div>
        </div>
      )
    }
  }
}

export default Home
