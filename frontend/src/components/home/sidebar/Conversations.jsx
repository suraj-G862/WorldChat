import React from 'react'
import Conversation from './Conversation'
import useGetConversations  from '../../../hooks/useGetConversations.js'

const Conversations = ({search}) => {
  const {loading , conversations} = useGetConversations();
  // console.log(search)
  const filteredConversations = conversations.filter((conversation) => {
    return conversation.fullName.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {/* { conversations.map((conversation,idx)=> (
        <Conversation 
        key={conversation._id} 
        conversation={conversation}
        lastIdx={idx === conversations.length-1}
        />))} */}
        {filteredConversations.map((conversation, idx) => (
          <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === filteredConversations.length - 1}
          />
        ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations
