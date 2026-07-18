import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate,   Link} from 'react-router-dom';
import logoText1 from '../assets/carve2-crop.png'
import StateContext from '../context/StateContext';

export default function ForgetPassword(props) {
    
    const navigate = useNavigate(null)
    const { setUser, displayNotification } = useContext(StateContext);
    const [ emailInput, setEmailInput ] = useState(null);
    const [ passwordInput, setPasswordInput ] = useState(null);


    const handleFormSubmit = (e) => {
        e.preventDefault()
        displayNotification('success', "Password reset link sent to your email")
        navigate('/reset-password')
        
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
                                <label htmlFor="email" className=" block mb-2  text-sm font-medium text-gray-900 ">
                                    Lost your password? Please enter your email address. 
                                    You will receive a link to create a new password via email.
                                </label>
                                <input onChange={()=> console.log('change')}  type="email" id="email" placeholder='olanrewaju@gmail.com'
                                className=" bg-transparent border-1  border-gray-300 focus:border-gray-300 outline-none focus:right-0 focus:ring-transparent text-gray-900 text-sm rounded right-0
                                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 block w-full p-2.5 " 
                                required />
                            </div>
                            

                        <motion.button whileTap={{ scale: 0.75 }} 
                            type="submit"
                            className="inline-block w-full rounded bg-purple-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Reset Password
                        </motion.button>

                        <div className="mt-6 text-sm font-normal">
                            Remember password? 
                            <Link  to="/login"
                            className="transition duration-150 ease-in-out text-blue-600 focus:text-primary-600 active:text-blue-700 px-2"
                            >Login</Link>
                        </div>
                        </form>
                    </div>
                </div>
                
           </div>
           
        </>
    )
}



