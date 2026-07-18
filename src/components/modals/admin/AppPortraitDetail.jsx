import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsBookmark,BsBookmarkFill,BsChatFill } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { GoHeartFill ,GoHeart} from "react-icons/go";
import sample from '../../../assets/img1.jpeg'

const backDrop = {
    visible : {opacity : 1 },
    hidden : {opacity : 0 }
}

const modal = {
    hidden : {
        y: "-100vh",
        opacity: 0
    },
    visible : {
        y: "20px",
        opacity: 1,
        transition: { delay : 0.5 }
    }
}

export default function AppPortraitDetail({setShowModal}) {
    

    return (
        <AnimatePresence > 
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-50 h-full w-full md:inset-0'
                    variants={backDrop} initial="hidden" animate="visible" >
                    <motion.div onClick={(e) =>  e.stopPropagation()}
                         className=' w-full max-w-2xl  mx-auto '
                        variants={modal} >

                        <div className="relative p-4 w-full max-w-6xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Portrait details
                                    </h3>
                                    <button onClick={() => setShowModal(false)}
                                        type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <a href="#" className="flex flex-col items-center  shadow md:flex-row md:max-full md:min-h-300px   ">
                                    <img className="object-cover w-full h-full md:h-auto md:w-48 md:rounded-bl-md " src={sample} alt=""/>
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>
                                        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                                        <p className=' flex font-normal text-sm py-1'>
                                            <span>Uploaded at : </span>
                                            <span>20.5k</span>
                                        </p>


                                        <div className="inline-flex rounded w-full py-2 font-normal text-sm " role="group">
                                            <p className="inline-flex gap-1 items-center px-4 py-2   bg-white border border-gray-200 focus:z-10 ">
                                               
                                                {/* <GoHeart /> */}
                                                <span className=' text-gray-600 font-bold'>
                                                200K
                                                </span>
                                                <span>Likes</span>
                                                
                                            </p>
                                            <p className="inline-flex gap-1 items-center px-4 py-2  text-gray-900 bg-white border-t border-b border-gray-200 focus:z-10 focus:ring-0">
                                                {/* <BsBookmark /> */}
                                                <span className=' text-gray-600 font-bold'>
                                                120
                                                </span>
                                                <span>Favourites</span>
                                            </p>
                                            <p className="inline-flex gap-1 items-center px-4 py-2  text-gray-900 bg-white border border-gray-200  focus:z-10 focus:ring-0">
                                               
                                                {/* <MdOutlineSell /> */}
                                                <span className=' text-gray-600 font-bold'>
                                                50k
                                                </span>
                                                <span>Purchases</span>
                                                
                                            </p>
                                        </div>

                                    </div>
                                </a>


                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            
        </AnimatePresence>
    )
}
