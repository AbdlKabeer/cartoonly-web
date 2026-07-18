import React from 'react'

export default function BreakDownCard({Icon, cardText , cardCount , cardPercent}) {
    

    return (
        <>
            <div className="flex items-center gap-4 justify-between rounded-sm py-6 px-8 bg-white">
                <div className=" flex flex-col gap-2 items-startjustify-between ">
                    {/* <div> */}
                    <h4 className=" text-3xl font-light text-black ">
                        {cardCount}
                    </h4>
                    <span className="text-sm font-medium text-gray-500">{cardText}</span>
                    {/* </div> */}
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
                    <Icon className=" w-5 h-5" />
                </div>
            </div>
            {/* <div className="rounded-sm border border-stroke bg-white py-3 px-7 shadow-lg ">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
                    <Icon className=" w-5 h-5" />
                    
                </div>

                <div className="mt-4 flex items-end justify-between ">
                    <div>
                    <h4 className=" text-2xl font-bold text-black ">
                        {cardCount}
                    </h4>
                    <span className="text-sm font-medium">{cardText}</span>
                    </div>

                    <span className="flex items-center gap-1 text-sm font-medium text-green-400">
                        {cardPercent && <>{cardPercent}%</>}
                    <svg className="fill-meta-3" width="10" height="11" viewBox="0 0 10 11" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                        fill="" />
                    </svg>
                    </span>
                </div>
            </div> */}
        </>
    )
}
