import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'



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
        y: "100px",
        opacity: 1,
        transition: { delay : 0.5 }
    }
}
export default function Confirm({ confirmMessage,  setShowModal }) {
    

    return (
        <AnimatePresence > 
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-50 h-full w-full md:inset-0'
                variants={backDrop} initial="hidden" animate="visible" >
                <motion.div onClick={(e) =>  e.stopPropagation()}
                    className=' w-full max-w-2xl  mx-auto text-center'
                    variants={modal} >
                        
                        <div className="relative p-4 w-full max-w-md mx-auto md:h-auto">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button  onClick={() => setShowModal(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-4 md:p-5 text-center">
                                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{confirmMessage}</h3>
                                    <motion.button whileTap={{ scale: 0.75 }}  onClick={() => setShowModal(true)}    type="button" className="confirm-button">
                                        Yes, I'm sure
                                    </motion.button>
                                    <motion.button whileTap={{ scale: 0.75 }}  onClick={() => setShowModal(false)}  type="button" className="cancel-button ">No, cancel</motion.button>
                                </div>
                            </div>
                        </div>

                </motion.div>
            </motion.div>
            
        </AnimatePresence>
    )
}
