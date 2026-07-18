import React, { useState, useEffect, useContext , useCallback } from 'react';
import { motion  } from 'framer-motion';
import { useNavigate,   Link} from 'react-router-dom';
import logoText1 from '../assets/carve2-crop.png'
import StateContext from '../context/StateContext';



const REACT_APP_GOOGLE_CLIENT_ID = "913576593374-8213b0ob101rdl8ojcs9olvpn1c6grjg.apps.googleusercontent.com"
const REACT_APP_GOGGLE_REDIRECT_URL_ENDPOINT = "http://localhost:5173" 

export default function Login(props) {

    const navigate = useNavigate(null)
    const { setUser, loginUser ,displayNotification } = useContext(StateContext);
    const [ emailInput, setEmailInput ] = useState(null)
    const [ passwordInput, setPasswordInput ] = useState(null)



    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (emailInput  && passwordInput ){
            loginUser(emailInput , passwordInput )
        }else{
            displayNotification('error', "All fields are required")
        }
        
    }



    useEffect(() => {
        const storedUsername = localStorage.getItem("user_goggle");
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

      
      const openGoogleLoginPage = useCallback(() => {
        const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
        
        const scope = [
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" ");
    
        const params = new URLSearchParams({
          response_type: "code",
          client_id: REACT_APP_GOOGLE_CLIENT_ID,
          redirect_uri: `${REACT_APP_GOGGLE_REDIRECT_URL_ENDPOINT}/google`,
          prompt: "select_account",
          access_type: "offline",
          scope,
        });
    
        const url = `${googleAuthUrl}?${params}`;
    
        window.location.href = url;
      }, []);


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
                                <label htmlFor="email" className=" block mb-2  text-sm font-medium text-gray-900 ">Email address</label>
                                <input onChange={(e)=> setEmailInput(e.target.value)}  type="email" id="email" placeholder='olanrewaju@gmail.com'
                                className=" bg-transparent border-1  border-gray-300 focus:border-gray-300 outline-none focus:right-0 focus:ring-transparent text-gray-900 text-sm rounded right-0
                                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 block w-full p-2.5 " 
                                 />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input onChange={(e)=> setPasswordInput(e.target.value)}  type="password" id="password" placeholder='********' className="bg-transparent border-1  border-gray-300 focus:border-gray-300 outline-none focus:right-0 focus:ring-transparent text-gray-900 text-sm rounded right-0
                                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 block w-full p-2.5   "  />
                            </div>

                        

                            <div className="mb-6 flex items-center justify-between">
                                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input onChange={()=> console.log('change')} 
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] 
                                    border-[0.125rem] border-solid border-neutral-300 outline-none focus:right-0 focus:outline-none text-sm font-normal"
                                    type="checkbox"
                                    value=""/>
                                <label className="inline-block pl-[0.15rem] text-sm font-normal">
                                    Remember me
                                </label>
                                </div>

                                <Link
                                to="/forget-password"
                                className="transition duration-150 ease-in-out text-sm font-normal hover:text-blue-600"
                                >Forgot password?</Link>
                            </div>

                        <motion.button whileTap={{ scale: 0.75 }} 
                            type="submit"
                            className="inline-block w-full rounded bg-purple-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Sign in
                        </motion.button>

                        <div
                            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p
                            className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                            OR
                            </p>
                        </div>

                        

                        <button onClick={openGoogleLoginPage} type='button' className="mb-6 flex w-full items-center justify-center rounded-md bg-white p-3 border text-base font-medium text-body-color shadow-one hover:text-primary">
                            <span className="mr-3">
                                <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_95:967)">
                                    <path
                                    d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                                    fill="#4285F4"
                                    />
                                    <path
                                    d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                                    fill="#34A853"
                                    />
                                    <path
                                    d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                                    fill="#FBBC05"
                                    />
                                    <path
                                    d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                                    fill="#EB4335"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_95:967">
                                    <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
                            </span>
                            Sign in with Google
                        </button>
                        
                        </form>
                    </div>
                </div>
                
           </div>
           
        </>
    )
}






// <section className="flex flex-col md:flex-row h-screen items-center">

// <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
//     <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
// </div>

// <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
//         flex items-center justify-center">

//     <div className="w-full h-100">


//     <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

//     <form className="mt-6" action="#" method="POST" onSubmit={setUser}>
//         <div>
//         <label className="block text-gray-700">Email Address</label>
//         <input type="email" name=""  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="false" required />
//         </div>

//         <div className="mt-4">
//         <label className="block text-gray-700">Password</label>
//         <input type="password" name=""  placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
//                 focus:bg-white focus:outline-none" required />
//         </div>

//         <div className="text-right mt-2">
//         <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
//         </div>

//         <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
//             px-4 py-3 mt-6">Log In</button>
//     </form>

//     <hr className="my-6 border-gray-300 w-full" />

//     <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
//             <div className="flex items-center justify-center">
//             <FcGoogle />
//             {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg> */}
//             <span className="ml-4">
//             Log in
//             with
//             Google</span>
//             </div>
//         </button>

//     <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
//             account</a></p>


//     </div>
// </div>

// </section>