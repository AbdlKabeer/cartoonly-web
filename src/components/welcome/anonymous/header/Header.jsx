import { useState , useEffect} from "react"
import { motion } from "framer-motion"
import NavLink  from "./NavLink"
import {RxHamburgerMenu} from 'react-icons/rx'
import FAQ from "../../../modals/FAQ"
import Modal from "../../../modals/Modal"
import Terms from "../../../modals/Terms"

import logoText from '../../../../assets/crop1.png'
import logoText1 from '../../../../assets/carve2-crop.png'


export default function Header() {

    const [showNav, setShowNav] = useState(false)
    const [nav, setNav] = useState(false);
    const [textColor, setTextColor] = useState('white');
    const [changeBgColor, setChangeBgColor] = useState(false);

    const [activeModal, setActiveModal] = useState(false);

    const [showModal , setShowModal] = useState(false)
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 300) {
            setChangeBgColor(true);
            
          } else {
            // setColor('transparent');
            setChangeBgColor(false);
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);



    const handleNavLink = (link) => {
      setActiveModal(link)
    }

    return (
        <>
          {activeModal == 'faq' && <FAQ  setShowModal={setActiveModal} />}
          {activeModal == 'subscribe' && <Modal  setShowModal={setActiveModal}/>}
          {activeModal == 'terms' && <Terms  setShowModal={setActiveModal}/>}
          <header
                className={`${changeBgColor ? "bg-[#eae3df] md:bg-[#eae3df]": "text-diporange bg-[#eae3df] md:bg-transparent"} fixed left-0 top-0 w-full z-10 ease-in duration-300`}>
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-2 ">
                  <a href="#" className="flex items-center">
                      {/* <img src={logoText} className="h-20 w-32 mr-3 " alt="site Logo" /> */}
                      <img src={logoText1} className="h-20 w-32 mr-3 " alt="site Logo" />
                      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap ">Optimistic Limited</span> */}
                  </a>
                  <button onClick={()=> setShowNav(!showNav)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-darkgray rounded-lg md:hidden hover:bg-superextralight focus:outline-none " >
                      <span className="sr-only">Open main menu</span>
                      <RxHamburgerMenu className=" w-10 h-10" /> 
                  </button>
                  <div className={`${showNav ? "" : "hidden"} w-full text-sm font-normal md:block md:w-auto`}>
                      <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 ">
                          {/* <NavLink href='/' text='Home' />
                          <NavLink href='/about' text='About' />
                          <NavLink href='/' text='Shop' /> */}
                          
                          <NavLink href='terms' text='Terms' handleNavClick={handleNavLink} />
                          <NavLink href='faq' text='FAQ' handleNavClick={handleNavLink}/>
                          
                          <motion.button whileTap={{ scale: 0.75 }}  type="button" onClick={() => setActiveModal('subscribe')} className="w-fit text-white bg-customblack hover:bg-darkgray focus:outline-none rounded-lg px-5 py-2  my-2 md:my-0  ">
                              Subscribe
                          </motion.button>
                          <motion.a whileTap={{ scale: 0.75 }}  href="/login" className="inline-flex items-center justify-center px-5 py-2 mr-3  text-center text-white rounded-lg bg-diporange hover:bg-white hover:text-customblack ">
                              Login
                          </motion.a>
                      </ul>
                  </div>
              </div>
          </header>
        </>
    )
}
