import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import logoText1 from '../assets/carve2-crop.png'
import StateContext from '../context/StateContext';
import { LuEye , LuEyeOff  } from "react-icons/lu";

export default function SetPassword(props) {
    
    const { displayNotification } = useContext(StateContext);

    const [ newPassword, setNewPassword ] = useState(null)
    const [ confirmPassword, setConfirmPassword ] = useState(null)
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };


    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (newPassword  && confirmPassword ){
            if ( newPassword === confirmPassword ){
                displayNotification('success', "Password reset successfully")
            }
            else{
                displayNotification('error', "Password does not match")
            }
        }else{
            displayNotification('error', "All fields are required")
        }
        
    }

    return (
        <>
           <div className='  bg-lightbrawn h-screen w-full flex justify-center place-content-center  items-center'>
                <div className="h-full sm:h-fit sm:max-w-md  p-4 py-12 bg-white  w-full sm:px-6">
                    <div className="w-full bg-white">
                        <div  className=' flex justify-center place-content-center pb-4'>
                            <a href='/'>
                                <img src={logoText1} className=' h-12 text-center' />
                            </a>

                        </div>
                        <form onSubmit={handleFormSubmit}>
                        
                            <div className="mb-5">
                                <label className=" block mb-2  text-sm font-medium text-gray-900 ">
                                    New Password
                                </label>
                                <input onChange={(e)=> setNewPassword(e.target.value)}  type={showPassword ? 'text' : 'password'}  placeholder=''
                                className=" bg-transparent border-1  border-gray-300 focus:border-gray-300 outline-none focus:right-0 focus:ring-transparent text-gray-900 text-sm rounded right-0
                                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 block w-full p-2.5 " 
                                />
                            </div>
                            <div className="mb-5">
                                <label className=" block mb-2  text-sm font-medium text-gray-900 ">
                                    Confirm Password
                                </label>
                                <input onChange={(e)=> setConfirmPassword(e.target.value)}  type={showPassword ? 'text' : 'password'} placeholder=''
                                className=" bg-transparent border-1  border-gray-300 focus:border-gray-300 outline-none focus:right-0 focus:ring-transparent text-gray-900 text-sm rounded right-0
                                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 block w-full p-2.5 " 
                                />
                            </div>

                            <motion.button whileTap={{ scale: 0.75 }}  type="button" className='py-2' onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <span className=' flex gap-2 items-center text-sm font-normal'>
                                        <LuEyeOff />
                                        <span>Hide password </span>
                                    </span>
                                ): (
                                    <span className=' flex gap-2 items-center text-sm font-normal'>
                                        <LuEye />
                                        <span>Show password </span>
                                    </span>
                                )}
                            </motion.button>
                            

                        <motion.button whileTap={{ scale: 0.75 }} 
                            type="submit"
                            className="inline-block w-full rounded bg-purple-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase 
                            leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                            hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                            dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Change Password
                        </motion.button>

                        <div className="mt-6">
                            {/* Remember password?  */}
                            <a
                            href="/login"
                            className="transition duration-150 ease-in-out text-blue-600 focus:text-primary-600 active:text-blue-700 px-2"
                            >Login</a>
                        </div>
                        </form>
                    </div>
                </div>
                
           </div>
           
        </>
    )
}



