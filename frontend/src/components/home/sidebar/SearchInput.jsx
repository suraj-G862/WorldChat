import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { useState } from 'react';
import  useConversation  from '../../../zustand/useConversation.js';
import  useGetConversations  from '../../../hooks/useGetConversations';
import  toast from "react-hot-toast";

const SearchInput = () => {
  const [ search, setSearch ] = useState('');
  const { setSelectedConversation } = useConversation();
  const {conversations} = useGetConversations();
  const handlesubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    const conversation = conversations.find((conversation) => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }
    else{
      toast.error('No conversation found')
    }
  }
  return (
    <form onSubmit={handlesubmit} className='flex items-center gap-2 mt-3'>
        <input type="text" placeholder='Search..'
         className='input  input-bordered rounded-full'
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         />
        <button type='submit' className='btn btn-circle hover:bg-sky-500 bg-white border-hidden'>
           <IoMdSearch className='w-6 h-6' />
        </button>
    </form>
  )
}

export default SearchInput

