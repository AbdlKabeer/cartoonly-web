import React, { useState , useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';
import EmptyCart from "../assets/emptyCart.svg";
import img1 from '../assets/img1.jpeg';
import { BsBookmark,BsBookmarkFill,BsChatFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill ,GoHeart} from "react-icons/go";
import InnerLoading from "./InnerLoading";





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
      y: "0px",
      opacity: 1,
      transition: { delay : 0.5 }
  }
}


const Card = ({ toggleCart , setToggleCart, item }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate a delay of 1 second

        // Simulate a successful response
        const responseData = { data: 'Mock API response' };

        // Update state with the response data
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 


  
  return (
    
    <AnimatePresence>
      {toggleCart && (
        <motion.div 
        className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 h-full w-full inset-0'
        variants={backDrop} initial="hidden" animate="visible">
            <motion.div className='w-full h-full bg-white mx-auto overflow-y-scroll  overflow-x-hidden px-4 '
              // variants={modal} 
              >
                <div className="">
                    <button onClick={()=> setToggleCart(false)}  type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                        <svg className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="">
                      <div>
                          <div className="w-full flex items-center justify-between py-4">
                            <motion.div whileTap={{ scale: 0.75 }}  onClick={()=> setToggleCart(false)}  >
                              <MdOutlineKeyboardBackspace className="text-gray-700 text-3xl cursor-pointer" />
                            </motion.div>
                            {/* <p className="text-gray-700 text-lg font-semibold">Explore amazing designs</p> */}

                            <p></p>
                          </div>
                      </div>
                    </div>
                </div>

                {loading ? (
                  <>
                  <div className=" max-w-sm mx-auto my-6">
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className=" h-16 w-full bg-gray-200 rounded mb-4"></div>
                      </div>
                      
                      <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-96 min-h-[500px] w-full bg-gray-200 rounded mb-4"></div>
                      </div>
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className=" h-16 w-full bg-gray-200 rounded mb-4"></div>
                      </div>
                  </div>
                  </>
                ): (
                  <>
                  <div className=" max-w-sm mx-auto flex justify-between items-center">
                    <p className="text-3xl font-light text-black">${item.price}</p>
                    {/* <p className="text-gray-700 text-lg font-semibold">Explore amazing designs</p> */}
                    <motion.button whileTap={{ scale: 0.75 }} className='dark-button'>
                        <span>Purchase</span>
                      </motion.button>
                  </div>
                  
                  <div className=" max-w-sm mx-auto  gap-2 my-6  ">
                  <p className="font-medium text-sm ">{item?.description}</p>
                  {/* <div className=" max-w-3xl mx-auto md:grid  md:grid-cols-7 gap-2 my-6 "> */}
                    <div className="relative p-8 rounded-lg col-span-4">
                        <img className=" max-w-sm mx-auto rounded-lg w-full object-cover " src={img1} alt="user-post" /> 
                        <div className="absolute top-0 w-full h-full flex flex-col justify-between  z-50"></div>
                    </div>
                    <div className=" col-span-3 flex gap-2 flex-col justify-between items-center md:block text-center md:text-left ">
                      
                        <div className="inline-flex rounded w-full font-normal text-sm mx-auto" role="group">
                            <motion.p whileTap={{ scale: 0.75 }} className="inline-flex gap-2 items-center place-content-center px-4 py-2 w-2/6 cursor-pointer   bg-white border border-gray-200 focus:z-10 ">
                                <GoHeartFill className=' h-5 w-5'/>
                                <span className=' text-gray-600 font-bold'>
                                {item?.likes_count}
                                </span>
                                {/* <span>Likes</span> */}
                            </motion.p>
                            <motion.p whileTap={{ scale: 0.75 }} className="inline-flex gap-2 items-center place-content-center  px-4 py-2  w-2/6 cursor-pointer   text-gray-900 bg-white border-t border-b border-gray-200 focus:z-10 focus:ring-0">
                                <BsBookmark className=' h-5 w-5'/>
                                <span className=' text-gray-600 font-bold'>
                                {item?.saves_count}
                                </span>
                                {/* <span>Favourites</span> */}
                            </motion.p>
                            <motion.p whileTap={{ scale: 0.75 }} className="inline-flex gap-2 items-center place-content-center   px-4 py-2 w-2/6 cursor-pointer    text-gray-900 bg-white border border-gray-200  focus:z-10 focus:ring-0">
                                <BsChatFill className=' h-5 w-5'/>
                                <span className=' text-gray-600 font-bold'>
                                {item?.comments_count}
                                </span>
                                {/* <span>Purchases</span> */}
                            </motion.p>
                        </div>
                    </div>
                  </div>
                  </>
                )}

            </motion.div>
      </motion.div>
      )}
      
    </AnimatePresence>
    
    
  );
};

export default Card;


