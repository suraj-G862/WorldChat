import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
        <div className='form-control mt-2'>
            <label  className="label gap-2 cursor-pointer">
                <span className='label-text text-white'>Male</span>
                <input type="checkbox" className="checkbox border-white checked:border-indigo-800 [--chkbg:theme(colors.blue.500)] [--chkfg:white]" />
            </label>
        </div>
        <div className='form-control mt-2'> 
            <label  className="label gap-2 cursor-pointer">
                <span className='label-text text-white'>Female</span>
                <input type="checkbox" className="checkbox border-white checked:border-indigo-800 [--chkbg:theme(colors.blue.500)] [--chkfg:white]" />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckBox


// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control mt-2'>
//             <label  className="label gap-2 cursor-pointer">
//                 <span className='label-text text-white'>Male</span>
//                 <input type="checkbox" className="checkbox border-white checked:border-indigo-800 [--chkbg:theme(colors.blue.500)] [--chkfg:white]" />
//             </label>
//         </div>
//         <div className='form-control mt-2'> 
//             <label  className="label gap-2 cursor-pointer">
//                 <span className='label-text text-white'>Female</span>
//                 <input type="checkbox" className="checkbox border-white checked:border-indigo-800 [--chkbg:theme(colors.blue.500)] [--chkfg:white]" />
//             </label>
//         </div>
        
//     </div>
//   )
// }

// export default GenderCheckBox