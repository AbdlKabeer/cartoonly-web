import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion'

import fashion  from "../../assets/fashion-4.jpeg"
import fashion1  from "../../assets/img1.jpeg"
import StateContext from '../../context/StateContext';


export function Hero(props) {

    const { setUser } = useContext(StateContext);
    
    return (
        <>
            <section className="bg-lightbrawn text-white ">
                <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 py-32">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold text-headingFont tracking-tight leading-none md:text-5xl xl:text-6xl ">
                            {/* Artisanal Indigenous Attires for Nationwide Delivery */}
                            Cartoon Artistry Unleashed
                        </h1>
                        <p className="max-w-xl mb-6 font-light text-lightgray  lg:mb-8  ">
                        {/* 800 inspirational designs, illustrations, and graphic elements from the world’s best designers.Want more inspiration? */}
                        Sometimes, cartoons speak louder than words! Dive into a collection of images that convey stories, emotions, 
                        and messages with a touch of humor and charm. Experience the magic of visual storytelling at its finest.
                        {/* We believe that making a good impression starts with a stunning 
                        outlook hence our commitment to design & style that oozes elegance & comfort. */}
                        </p>
                        <motion.button whileTap={{ scale: 0.75 }} 
                        // onClick={()=> setUser('kabby')}
                            href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-diporange hover:bg-white hover:text-customblack ">
                            View Collection
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </motion.button>
                        {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>  */}
                    </div>
                    <motion.div 
                        // initial={{opacity: 0, x: 100}}
                        // // animate={{opacity: 1, x: 0}}
                        // whileInView={{opacity:1,x:0}}
                        // transition={{duration: 1.5}}
                        className="hidden lg:mt-0 lg:col-span-5 lg:flex scale-y-75">
                        <img src={fashion1} alt="mockup" className=' rounded-tl-[400px] rounded-tr-[400px]'/>
                    </motion.div>                
                </div>
                
            </section>
        </>
    )
}
