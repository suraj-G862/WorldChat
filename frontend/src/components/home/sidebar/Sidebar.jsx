import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import UserProfile from './UserProfile'

const Sidebar = () => {
  const displayborder = window.innerWidth >= 786 ? 'border-r border-slate-500' : '';
  const [search , setSearch] = useState('');
  function getSearch(search){
    setSearch(search);
  }
  return (
    <div className={`${displayborder} p-4  w-full flex flex-col h-screen`}>
        <div className="py-2 mb-2 flex">
           <div className="mt-3.5 mr-4" ><LogoutButton /></div>
           <SearchInput getSearch={getSearch}/>
           {/* <div className=' left-20 relative' ><UserProfile/></div> */}
        </div>
        <div className="divider px-3"></div>
        <div className="flex-1  overflow-y-auto"> <Conversations search={search} /></div>
    </div>
  )
}

export default Sidebar