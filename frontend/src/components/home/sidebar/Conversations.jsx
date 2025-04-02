import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../../hooks/useGetConversations.js'
import { useState } from 'react'
import { useAuthContext } from '../../../context/AuthContext';

const Conversations = ({ search }) => {
  const { loading, conversations } = useGetConversations();
  const [displayAddFriend, setDisplayAddFriend] = useState(false);
  const { authUser } = useAuthContext();
  const [friendsList, setFriendsList] = useState(authUser.friends);

  const filteredConversations = conversations.filter((conversation) => {
    return conversation.fullName.toLowerCase().includes(search.toLowerCase());
  });

  const friendsConversations = conversations.filter((conversation) => {
    for (let i = 0; i < friendsList.length; i++) {
      if (conversation._id === authUser.friends[i]) {
        return true;
      }
      return false;
    }
  });
  const InputBlank = search == '';
  if (InputBlank) {
    return (
      <div className='py-2 flex flex-col overflow-auto'>
        {filteredConversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
            displayAddFriend={displayAddFriend}
            setDisplayAddFriend={setDisplayAddFriend}
            friendsList={friendsList}
            setFriendsList={setFriendsList}
          />))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
      </div>
    )
  }
  else {
    return (
      <div className='py-2 flex flex-col overflow-auto'>
        {filteredConversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === filteredConversations.length - 1}
            displayAddFriend={displayAddFriend}
            setDisplayAddFriend={setDisplayAddFriend}
            friendsList={friendsList}
            setFriendsList={setFriendsList}
          />
        ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
      </div>
    )
  }
}

export default Conversations