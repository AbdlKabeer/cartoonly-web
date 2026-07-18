import React, { useState , useContext ,  useEffect  } from 'react';
import StateContext from '../../context/StateContext';
import logoText1 from '../../assets/carve2-crop.png'
import NavLink from './NavLink'
import NestedNavLink from './NestedNavLink'
import { BsHash, BsSignIntersectionT  } from 'react-icons/bs'
import { LuUser2,LuUsers2, LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion'





const sidebar = {
    hidden : {
        x: "-500px",
        opacity: 0
    },
    visible : {
        x: "0px",
        opacity: 1,
        transition: { delay : 0.1 }
    }
}


export default function SideBar({showAdminSideBarMobile}) {

    const {logoutUser} = useContext(StateContext)

    const nestedLink = [
        {
            "parent": {
                "icon" : LuUser2,
                "name": "Account"
            },
            "child": [
                {
                    "icon" : BsHash,
                    "name": "Profile",
                    "link": "/account/profile"
                },
                {
                    "icon" : BsHash,
                    "name": "Settings",
                    "link": "/account/settings"
                },
            ]
        },
        {
            "parent": {
                "icon" : AiOutlineAppstoreAdd,
                "name": "App"
            },
            "child": [
                {
                    "icon" : BsSignIntersectionT,
                    "name": "Portrait",
                    "link": "/app/protarits"
                },
                {
                    "icon" : BsSignIntersectionT,
                    "name": "FAQ",
                    "link": "/app/faqs"
                },
            ]
        }
    ]


    return (
        <>

            <aside className="hidden left-0 top-0 z-10 lg:flex h-screen w-72 flex-col overflow-y-hidden
                bg-lightbrawn text-gray-100 border-r duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
                <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
                    <a href="/">
                        <img src={logoText1} alt="Logo" className='h-10' />
                    </a>

                    <button className="block lg:hidden" >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                        fill=""
                        />
                    </svg>
                  
                    </button>
                    
                </div>

                <div className="no-scrollbar flex flex-col  overflow-y-auto duration-300 ease-linear"  >
                    <nav
                    className="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
                    
                    >
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>

                        <ul className="mb-6 flex flex-col gap-1.5">

                            <NavLink Icon={LuLayoutDashboard} linkName="Dashbord"  linkHref="/" />
                            <NavLink Icon={MdOutlineSell} linkName="Purchase"  linkHref="/purchase"  />
                            <NavLink Icon={LuUsers2} linkName="Users"  linkHref="/users"  />

                            {nestedLink && nestedLink.map((items, index )=> {
                                return (
                                    <NestedNavLink key={index}  parentLink={items.parent} children={items.child}/>
                                )
                            })}

                           
                            <li>
                                <p onClick={logoutUser} 
                                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal cursor-pointer
                                            text-sm  duration-300 ease-in-out hover:bg-gray-500 hover:text-white"
                                     >
                                        <LuLogOut className=" w-5 h-5" />
                                    Sign Out
                                </p>
                            </li>
                       
                        </ul>
                    </div>
                    </nav>

                    <div  className="mx-auto mb-10 w-full max-w-60 rounded-sm border-t border-strokedark bg-boxdark py-6 px-4 text-center shadow-default">
                    <h3 className="mb-1 font-semibold text-white">olakaycoder1</h3>
                    <p className="mb-4 text-xs">Design by Olanrewaju AbdulKabeer</p>
                    <a href="mailto:programmerolakay@gmail.com" target="_blank" rel="nofollow"
                        className="flex items-center justify-center rounded-md bg-primary p-2 text-white hover:bg-opacity-95">
                        Contact Me
                    </a>
                    </div>
                </div>
            </aside>

            {/* MOBILE , TABLET SIDEBAR  */}
            {showAdminSideBarMobile && (
                <AnimatePresence > 
                <motion.aside variants={sidebar}
                    initial="hidden"
                    animate="visible"
                    className=" lg:hidden absolute left-0 top-0 z-20 flex h-screen w-72 bg-lightbrawn text-gray-100 flex-col overflow-y-hidden
                     duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
                <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
                    <a href="/">
                        <img src={logoText1} alt="Logo" className='h-10' />
                    </a>

                    <button className="block lg:hidden" >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                        fill=""
                        />
                    </svg>
                  
                    </button>
                    
                </div>

                <div className="no-scrollbar flex flex-col  overflow-y-auto duration-300 ease-linear"  >
                    <nav
                    className="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
                    
                    >
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>

                        <ul className="mb-6 flex flex-col gap-1.5">

                            <NavLink Icon={LuLayoutDashboard} linkName="Dashbord"  linkHref="/" />
                            <NavLink Icon={MdOutlineSell} linkName="Purchase"  linkHref="/purchase"  />
                            <NavLink Icon={LuUsers2} linkName="Users"  linkHref="/users"  />

                            {nestedLink && nestedLink.map((items, index )=> {
                                return (
                                    <NestedNavLink key={index}  parentLink={items.parent} children={items.child}/>
                                )
                            })}

                           
                            <li>
                                <p onClick={logoutUser} 
                                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal cursor-pointer
                                            text-sm  duration-300 ease-in-out hover:bg-gray-500 hover:text-white"
                                     >
                                        <LuLogOut className=" w-5 h-5" />
                                    Sign Out
                                </p>
                            </li>
                       
                        </ul>
                    </div>
                    </nav>

                    <div  className="mx-auto mb-10 w-full max-w-60 rounded-sm border-t border-strokedark bg-boxdark py-6 px-4 text-center shadow-default">
                    <h3 className="mb-1 font-semibold text-white">olakaycoder1</h3>
                    <p className="mb-4 text-xs">Design by Olanrewaju AbdulKabeer</p>
                    <a href="mailto:programmerolakay@gmail.com" target="_blank" rel="nofollow"
                        className="flex items-center justify-center rounded-md bg-primary p-2 text-white hover:bg-opacity-95">
                        Contact Me
                    </a>
                    </div>
                </div>
            </motion.aside>
            </AnimatePresence>
            )}
            

        </>
    )
}
