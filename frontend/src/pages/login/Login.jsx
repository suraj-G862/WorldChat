import React from 'react'

function Login() {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Login
                <span className="text-blue-500 "> Chatify</span>
            </h1>
            <form>
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Password</span>
                    </label>
                    <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                </div>
                <a href="#" className='test-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Don't have an account? Sign up
                </a>
                <div>
                    <button className="btn  btn-block btn-sm mt-2">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login



// import React from 'react'
// function Login() {
//   return (
//     <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">Login
//                 <span className="text-blue-500 "> Chatify</span>
//             </h1>
//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base text-white label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//                 </div>
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base text-white label-text'>Password</span>
//                     </label>
//                     <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//                 </div>
//                 <a href="#" className='test-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Don't have an account? Sign up
//                 </a>
//                 <div>
//                     <button className="btn  btn-block btn-sm mt-2">Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login