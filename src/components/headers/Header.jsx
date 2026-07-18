import React, { useState , useContext  } from 'react';
import {motion } from 'framer-motion'
import { Link , useNavigate} from 'react-router-dom'
import HeaderLink from './HeaderLink'
import { MdFilterList } from "react-icons/md";
import StateContext from '../../context/StateContext';
import logoText from '../../assets/crop1.png'
import logoText1 from '../../assets/carve2-crop.png'

export default function Header(props) {
    const navigate = useNavigate()
    const {logoutUser, authUser } = useContext(StateContext)
    const [showFilter, setShowFilter] = useState(false);
    const [showMobileSearchInput, setShowMobileSearchInput] = useState(false);
    const [showMobileDropDown, setShowMobileDropDown] = useState(false);
    const [showProfileDropDown, setShowProfileDropDown] = useState(false);





    return (
        <>
            <nav className="bg-white border-gray-200 py-2 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className='hidden md:block h-10' src={logoText} alt=" Logo" />
                        <img src={logoText1} className=" md:hidden h-10" alt=" Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CartCache</span> */}
                    </a>
                    <div className="flex gap-2 items-center md:order-2">
                        
                   
                        
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" onChange={()=> console.log('change')}  className="block w-full p-2 ps-10 text-sm  border border-gray-300 focus:border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:bg-gray-50  " placeholder="Search..." />

                            
                        </div>
                        <div className="relative hidden md:block ml-4">
                            <motion.img whileTap={{ scale: 0.75 }}  onClick={() => setShowProfileDropDown(!showProfileDropDown)} className="w-8 h-8 rounded-md cursor-pointer" src="https://avatars.githubusercontent.com/u/95700260?v=4" alt="Neil image" />
                            {showProfileDropDown && (
                                <div  className=" z-50 absolute -left-40   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                                    <div className="px-4 py-3 text-sm text-gray-900 ">
                                        <div>{authUser?.first_name} {authUser?.last_name}</div>
                                        <div className="font-medium truncate">{authUser?.email}</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                        <li>
                                            <a href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                                        </li>
                                        <li>
                                            <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#" onClick={logoutUser} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                        

                        <button onClick={()=> setShowMobileDropDown(!showMobileDropDown)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                       
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-sm border border-gray-100 rounded-lg
                             bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Home</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">My Purchase</a>
                            </li>
                            {/* <li>
                                <a href="/" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Terms</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">FAQ</a>
                            </li> */}
                        </ul>
                    </div>
                    {showMobileDropDown && (
                        <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1">
                       
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-sm border border-gray-100 rounded-lg
                                    bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                                {/* <HeaderLink refLink="#" linkName='My Purchase'/>
                                <HeaderLink refLink="#" linkName='My Order'/>
                                <HeaderLink refLink="#" linkName='Terms'/>
                                <HeaderLink refLink="#" linkName='FAQ'/>
                                <HeaderLink refLink="/profile" linkName='Profile'/>
                                <HeaderLink  linkName='Setting' refLink="/settings"/> */}
                                <li>
                                    <Link to='/' 
                                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to='#' 
                                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                       My Purchase
                                    </Link>
                                </li>

                                {/* <li>
                                    <Link to='#' 
                                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                        Terms
                                    </Link>
                                </li>

                                <li>
                                    <Link to='#' 
                                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                        FAQ
                                    </Link>
                                </li> */}

                                <li>
                                    <Link to='/profile' 
                                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                        Profile
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/settings' 
                                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                        Setting
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={logoutUser} href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                    
                </div>
            </nav>
        </>
    )
}
