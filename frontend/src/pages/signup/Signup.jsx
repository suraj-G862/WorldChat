import React from 'react'
import GenderCheckBox from '../../components/signup/GenderCheckBox'

function SignUp() {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                <span className="text-blue-500 "> Chatify</span>
            </h1>
            <form>
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your full name" className="w-full input input-bordered h-10" />
                </div>
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
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Confirm Password</span>
                    </label>
                    <input type="text" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                </div>
                <GenderCheckBox/>
                <a href="#" className='test-sm text-white  hover:text-blue-500 mt-2 inline-block'>
                    Already have an account? Login
                </a>
                <div>
                    <button className="btn  btn-block btn-sm mt-2">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp



// import React from 'react'
// import GenderCheckBox from '../../components/signup/GenderCheckBox'

// function SignUp() {
//   return (
//     <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
//                 <span className="text-blue-500 "> Chatify</span>
//             </h1>
//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base text-white label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder="Enter Your full name" className="w-full input input-bordered h-10" />
//                 </div>
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
//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base text-white label-text'>Confirm Password</span>
//                     </label>
//                     <input type="text" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
//                 </div>
//                 <GenderCheckBox/>
//                 <a href="#" className='test-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account? Login
//                 </a>
//                 <div>
//                     <button className="btn  btn-block btn-sm mt-2">Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp



