import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { useState } from 'react';
import  useConversation  from '../../../zustand/useConversation.js';
import  useGetConversations  from '../../../hooks/useGetConversations';
import  toast from "react-hot-toast";

const SearchInput = (props) => {
  const [ search, setSearch ] = useState('');
  const { setSelectedConversation } = useConversation();
  const {conversations} = useGetConversations();
  const handlesubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    const conversation = conversations.find((conversation) => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      // setSearch('');
    }
    else{
      toast.error('No conversation found')
    }
  }
  return (
    <form onSubmit={handlesubmit} className='flex items-center  mt-3'>
        <input type="text" placeholder='Search..'
         className='w-full py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none'
         value={search}
         onChange={(e) =>{
          setSearch(e.target.value)
          props.getSearch(e.target.value);
         }}
         />
        <button type='submit' className='w-14 h-10 rounded-full ml-2 hover:bg-sky-500 bg-white border-hidden'>
           <IoMdSearch className='ml-2 w-6 h-6'/>
        </button>
    </form>
  )
}

export default SearchInput

