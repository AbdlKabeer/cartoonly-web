import React from 'react'

export default function HeaderLink({ linkName , hrefLink}) {
    console.log(linkName)
    console.log(hrefLink)

    return (
        <li>
            <a href={hrefLink} className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{linkName}</a>
        </li>
    )
}


