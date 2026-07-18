import React, { useEffect, useState } from 'react'
import { AiOutlineDown } from "react-icons/ai";
import { IoChevronDown ,IoChevronUp  } from "react-icons/io5";

export default function NestedNavLink({parentLink, children}) {

    const Icon = parentLink?.icon

    const [showChildLinks , setShowChildLinks] = useState(false)
    const [activeLink , setActiveLink] = useState('==')


    useEffect(() => {

        children.map((item) => {
            const link = item.link
            if ( link == window.location.pathname){
                setShowChildLinks(true)
                setActiveLink(link)
            }
        })
       
    },[window.location.pathname])


    return (
        <>
            <li>
                <a onClick={()=> setShowChildLinks(!showChildLinks)} className="group cursor-pointer relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-sm text-bodydark1 duration-300 ease-in-out hover:bg-gray-500 hover:text-white "
                    >
                    {Icon && <Icon className="w-5 h-5" />}
                    {parentLink?.name}


                    {showChildLinks ? (
                        <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"/>
                    ): (
                        <IoChevronUp className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"/>
                    )}

                {/* <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                    fill=""
                    />
                </svg> */}
                </a>

                {showChildLinks && (
                    <div className="overflow-hidden" >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                            {children && children.map((item , index)=> {
                                return (
                                    <li key={index}>
                                        {activeLink == item?.link ? (
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-normal text-sm duration-300 ease-in-out bg-white text-lightbrawn  "
                                            href={item?.link} >{item?.name}
                                            </a >
                                        ) : (
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-normal text-sm duration-300 ease-in-out hover:bg-gray-500 hover:text-white "
                                                href={item?.link} >{item?.name}
                                            </a >
                                        )}
                                        
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
                
            </li>
        </>
    )
}
