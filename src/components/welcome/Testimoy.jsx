import React from 'react'
import { TestimonyCard } from './TestimonyCard'
import {AiFillFileText} from 'react-icons/ai'

export default function Testimoy(props) {
    

    return (
        <>
            <section className=" text-center w-full my-12">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
                    <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
                        <div className=' flex place-content-center  text-xl font-medium'>
                            <div className='flex gap-4 items-center py-4 text-diporange '>
                                <h2 className=' '>Our Process</h2>
                                <p className=' w-28 h-[2px] bg-diporange'></p>
                            </div>
                        </div>
                        <h2 className="mb-4 text-4xl tracking-tight font-bold ">How We Works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <TestimonyCard Icon={AiFillFileText}  title="Make Appointment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                        <TestimonyCard Icon={AiFillFileText}  title="Choose Our Service" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                        <TestimonyCard Icon={AiFillFileText}  title="Enjoy Your Fashion" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                     
                    </div>
                </div>
            </section>
        </>
    )
}
