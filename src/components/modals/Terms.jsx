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
export default function Terms({setShowModal}) {
    

    return (
        <AnimatePresence > 
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 bottom-0 bg-black left-0 right-0 bg-opacity-60 z-50 h-full w-full md:inset-0'
                    variants={backDrop} initial="hidden" animate="visible" >
                    <motion.div onClick={(e) =>  e.stopPropagation()}
                         className=' w-full max-w-2xl  mx-auto text-center'
                        variants={modal} >

                        <div className="relative p-4 w-full max-w-6xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Terms
                                    </h3>
                                    <button onClick={() => setShowModal(false)}
                                        type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="p-4 md:p-5 space-y-4">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Please use a standards-compliant web browser. 
                                    Javascript must be enabled to use this site. 
                                    By using our website, user agree to the Terms of Use. 
                                    We may change or update these terms so please check this page regularly. 
                                    We do not represent or warrant that the information 
                                    on our website is accurate, complete, or current. 
                                    This includes pricing and availability information. 
                                    We reserve the right to correct any errors or omissions, and to 
                                    change or update the information at any time without prior notice.
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Union’s General Data Protection Regulation (G.D.P.R.) 
                                        goes into effect on May 25 and is meant to 
                                        ensure a common set of data rights in the European Union. It requires organizations to notify users 
                                        as soon as possible of high-risk data breaches that could personally affect them.
                                    </p>
                                </div>

                                
                                
                                {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="static-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                    <button data-modal-hide="static-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                </div> */}
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            
        </AnimatePresence>
    )
}
