import React from 'react'

export function TestimonyCard(props) {
    
    const [isHover, setIsHover] = React.useState(false)

    return (
        <>
            <div onMouseOver={()=> setIsHover(true)}  onMouseLeave={()=> setIsHover(false)}
                className={`${isHover ? "bg-diporange rounded-md " : " "} flex flex-col gap-2 px-6 md:px-0 py-2 justify-center place-content-center  cursor-pointer`}>
                <div className={`${isHover ? "text-diporange bg-white": "text-white bg-diporange"} flex justify-center items-center p-6 w-fit mx-auto rounded-md  `}>
                    <props.Icon className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 " />
                </div>
                <h3 className="mb-2 text-xl font-bold">{props.title}</h3>
                <p className=" text-base font-light">{props.description}</p>
            </div>
        </>
    )
}
