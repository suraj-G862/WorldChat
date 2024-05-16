import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  const displayborder = window.innerWidth >= 700 ? 'border-r border-slate-500' : '';
  return (
    <div className={`${displayborder} p-4  w-full flex flex-col h-screen`}>
        <div className="py-2 mb-2 flex"> <SearchInput/> </div>
        <div className="divider px-3"></div>
        <div className="flex-1  overflow-y-auto"> <Conversations/></div>
        <div className="mb-3" ><LogoutButton /></div>
    </div>
  )
}

export default Sidebar