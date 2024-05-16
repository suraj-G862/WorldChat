import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from '../../../hooks/useLogout';

const LogoutButton = () => {
  const {loading, logout} = useLogout()
  return (
    <div >
      {!loading ? (
        <div className="w-8 h-8 rounded-full p-1 hover:bg-blue-400">
        <CiLogout className='w-6 h-6 cursor-pointer' onClick={logout} />
        </div>
      ) : (
        <span className='loading loading-spinner'></span>
      )
    }
    </div>
  )
}

export default LogoutButton