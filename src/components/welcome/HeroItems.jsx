import React from 'react'
import { motion } from 'framer-motion'
import fashion  from "../../assets/fashion-4.jpeg"
import fashion1  from "../../assets/img1.jpeg"
import fashion2  from "../../assets/game.jpeg"

export default function HeroItems(props) {
    

    return (
        <>
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 -translate-y-10">
                <div 
                    className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    width="6000"
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src={fashion1}
                    width="6000"
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
                <div 
                    className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src={fashion}
                    width="6000" 
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>

                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src={fashion2}
                    width="6000" 
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    src="https://i.pinimg.com/236x/be/02/f4/be02f4c6e2e15ef23244ba1a04ed05d4.jpg"
                    width="6000"
                    height="4000"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    style={{ color: 'transparent' }} // Update the style attribute
                    />
                </div>
            </div>
        </>
    )
}

