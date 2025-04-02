import React from 'react'
import useConversation from '../../../zustand/useConversation'
import { useSocketContext } from '../../../context/SocketContext';
import useAddFriend from '../../../hooks/useAddFriend';
import Image from './Image';
import { useAuthContext } from '../../../context/AuthContext';


const Conversation = ({conversation,LastIdx,displayAddFriend,setDisplayAddFriend,friendsList,setFriendsList}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const {addFriend,loading} = useAddFriend();
    const { authUser, setAuthUser } = useAuthContext();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    const handleSubmit = async () => {
        //not working. frienlist is not updating live. It is updating only after relogin
        // setFriendsList([...friendsList,conversation._id]);
        const updatedUser = {...authUser, friends: [...friendsList,conversation._id]};
        setAuthUser(updatedUser);
        console.log(updatedUser);
        await addFriend(conversation._id,authUser._id);
        setDisplayAddFriend(false);
    }
    
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
                     {displayAddFriend?<button className='bg-green-400 hover:bg-green-600 p-1 text-sm' onClick={handleSubmit}>Add friend</button>:null}
                 </div>
            </div>
        </div>
        {!LastIdx && <div className='divider my-0 py-0 h-1 '/>}
    </div>
  )
}

export default  Conversation 
