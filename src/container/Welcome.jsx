import React, { useEffect, useState , useContext} from 'react'
import { Hero } from '../components/welcome/Hero'
import HeroItems from '../components/welcome/HeroItems'
import Testimoy from '../components/welcome/Testimoy'
import Footer from '../components/welcome/anonymous/Footer'
import Header from '../components/welcome/anonymous/header/Header'
import Modal from '../components/modals/Modal'




export function Welcome() {
    
    const [showModal , setShowModal] = useState(false)


    useEffect(()=>{
        setTimeout(()=> {
            setShowModal(true)
        },3000)
    },[setShowModal])

    return (
        <> 
            {/* <Modal showModal={showModal} setShowModal={setShowModal}/> */}
            <Header />
            <Hero />
            <HeroItems />
            <Testimoy />
            <Footer />
        </>
    )
}


