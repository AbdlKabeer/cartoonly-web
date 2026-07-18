import React, { useState } from 'react'
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

export default function AppFAQEdit({setShowModal}) {
    

    const [ question , setQuestion ] = useState("iPad Air Gen 5th Wi-Fi")
    const [ description , setDescription ] = useState("iPad Air Gen 5th Wi-Fi")

    return (
        <AnimatePresence > 
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-50 h-full w-full md:inset-0'
                    variants={backDrop} initial="hidden" animate="visible" >
                    <motion.div onClick={(e) =>  e.stopPropagation()}
                         className=' w-full max-w-2xl  mx-auto '
                        variants={modal} >

                        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Update
                                    </h3>
                                    <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateProductModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <form action="#">
                                    <div className="grid gap-4 mb-4 ">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question</label>
                                            <input type="text" onChange={(e)=> setQuestion(e.target.value)} value={question} className="custom-input" placeholder="Ex. Apple iMac " />
                                        </div>
                                      
                                       
                                        <div className="">
                                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Response</label>
                                            <textarea id="description" rows="5" 
                                            value={description} onChange={(e)=> setDescription(e.target.value)}  className=" custom-input block p-2.5 w-full text-sm text-gray-900 
                                            bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " 
                                             placeholder="Write a description..."></textarea>                    
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <motion.button whileTap={{ scale: 0.75 }}  onClick={() => setShowModal(false)} type="button" className="dark-button">
                                            Update
                                        </motion.button>
                                        <motion.button whileTap={{ scale: 0.75 }}  onClick={() => setShowModal(false)} type="button" className="cancel-button">
                                            Cancel
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            
        </AnimatePresence>
    )
}
