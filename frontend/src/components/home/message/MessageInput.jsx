import React from 'react'
import { BiSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" className='border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send Message' />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white w-8 h-8 rounded-full m-auto mr-1  hover:bg-blue-500'>
               <BiSend className='w-5 h-5'/>
           </button>
        </div>
    </form>
  )
}   

export default MessageInput

// import React from 'react'
// import { BiSend } from "react-icons/bi";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type="text" className='border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send Message' />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white w-8 h-8 rounded-full m-auto mr-1  hover:bg-blue-500'>
//                <BiSend className='w-5 h-5'/>
//            </button>
//         </div>
//     </form>
//   )
// }   

// export default MessageInput