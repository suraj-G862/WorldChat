import React from 'react'
import GenderCheckBox from '../../components/signup/GenderCheckBox'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import useSignup from '../../hooks/useSignup'

function SignUp() {
    const [inputs , setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const {loading,signup} = useSignup();
    const handleCheckBoxChange = (gender) =>{
        setInputs({...inputs,gender});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }
  return (
    <div className="flex flex-col item-center justify-center  mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding ">
            <h1 className="text-3xl font-semibold text-center text-white">Sign Up
                <span className="text-blue-600 "> WorldChat</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your full name" className="w-full input input-bordered h-10" 
                    value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} />
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" 
                    value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                    value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                    />
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base text-white label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
                    value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                    />
                </div>
                <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
                <Link to="/login" className='test-sm text-white  hover:text-blue-500 mt-2 inline-block'>
                    Already have an account? Login
                </Link>
                <div>
                    <button className="btn  btn-block btn-sm mt-2" disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp


