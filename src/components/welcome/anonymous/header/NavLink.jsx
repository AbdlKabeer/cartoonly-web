import React from 'react'
import { Link } from "react-router-dom"

export default function NavLink(props) {
    
    const handleNavClick = () => {
        props.handleNavClick(props.href)
    }

    return (
        <li onClick={handleNavClick}
            className=' cursor-pointer hover:text-customblue py-2 md:py-0'>
            {/* <Link to={props.href}>{props.text}</Link> */}
            <span 
            // to={props.href}
            >{props.text}</span>
        </li>
    )
}
