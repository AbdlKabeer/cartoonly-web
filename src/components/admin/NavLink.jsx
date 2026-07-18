import React, {useEffect, useState} from 'react'


export default function NavLink({Icon , linkName, linkHref }) {
    

    const [showChildLinks , setShowChildLinks] = useState(false)
    const [activeLink , setActiveLink] = useState('==')


    useEffect(() => {
   
    },[window.location.pathname])

    return (
        <>
            <li>
                {window.location.pathname == linkHref ? (
                    <a className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-sm 
                         duration-300 ease-in-out bg-white text-lightbrawn"
                            href={linkHref} >
                        <Icon className=" w-5 h-5" />
                        {linkName}
                    </a>
                ) : (
                    <a className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-sm  duration-300 ease-in-out hover:bg-gray-500 hover:text-white"
                        href={linkHref} >
                        <Icon className=" w-5 h-5" />
                        {linkName}
                    </a>
                )}
                

                
            </li>
        </>
    )
}
