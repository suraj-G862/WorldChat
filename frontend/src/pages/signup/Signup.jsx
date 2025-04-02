import React from 'react'
import GenderCheckBox from '../../components/signup/GenderCheckBox'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import useSignup from '../../hooks/useSignup'
import SwipeableComponent from '../login/SwipeableComponent.jsx'

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
    const showPassword=()=>{
        var x = document.getElementById("password");
        var y = document.getElementById("confirmPassword");
        if (x.type === "password") {
          x.type = "text";
            y.type = "text";
        } else {
          x.type = "password";
            y.type = "password";
        }
    }
  return (
    <div className="flex h-full w-full justify-center ">
        <div className='w-[60%] hidden md:flex rounded-lg bg-blue-400 rounded-r-none '>
            <SwipeableComponent />
        </div>
        <div className="w-300px md:w-[40%] p-6 lg:p-10  rounded-lg md:rounded-l-none  bg-clip-padding ">
            <h1 className="text-3xl font-semibold text-center ">Sign Up
                <span className="text-blue-600 "> WorldChat</span>
            </h1>
            <form onSubmit={handleSubmit} className='p-10 mt-0' >
                <div>
                    <label className="label p-2">
                        <span className='text-base  label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your full name" className="w-full input input-bordered h-10" 
                    value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} />
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base  label-text'>Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" 
                    value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base  label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                    value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} id='password'
                    />
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base  label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
                    value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} id='confirmPassword'
                    />
                </div>
                <div className='flex'>
                        <input type="checkbox" onClick={()=>showPassword()} className='w-4 h-4 mt-3'/>
                        <span className='mt-2.5 ml-1 text-sm'>Show Password</span>
                </div>
                <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
                <div className=' inline-block mr-2'> Already have an account? </div>
                <Link to="/login" className='  text-blue-400 hover:underline hover:text-blue-600 mt-2 inline-block  '>
                     Login
                </Link>
                <div>
                    <button className="btn  btn-block btn-sm mt-2 bg-blue-400 hover:bg-blue-600 text-white" disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp


