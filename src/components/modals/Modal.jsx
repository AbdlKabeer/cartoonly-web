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
export default function Modal({setShowModal}) {
    

    return (
        <AnimatePresence > 
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-50 h-full w-full md:inset-0'
                    variants={backDrop} initial="hidden" animate="visible" >
                    <motion.div onClick={(e) =>  e.stopPropagation()}
                        className=' w-full md:w-[400px] lg:w-[500px]  mx-auto text-center'
                        variants={modal} >
                            <div className="relative p-4 w-full  max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button onClick={() => setShowModal(false)}
                                        type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="p-4 md:p-5 ">
                                        <p className=' h-10 w-10'>

                                        </p>
                                        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Subscribe to our newsletter</h3>
                                        <p className="text-gray-500 dark:text-gray-400 mb-6">Promotions, new products and sales. Directly to your inbox</p>


                                        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Email</label>
                                        <div className="relative mb-6">
                                        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                            </svg>
                                        </div> */}
                                        <input  onChange={()=> console.log('change')}  type="text" id="input-group-1" 
                                        className=" custom-input  " placeholder="olanrewaju@gmail.com" />
                                        </div>


                                        <div className="flex items-center mt-6 space-x-2 rtl:space-x-reverse">
                                            <motion.button whileTap={{ scale: 0.75 }}  type="button" className="w-fit text-white bg-customblack hover:bg-darkgray focus:outline-none rounded-lg px-5 py-2  my-2 md:my-0  ">
                                                Subscribe
                                            </motion.button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                    </motion.div>
                </motion.div>
            
        </AnimatePresence>
    )
}
