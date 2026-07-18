import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import { BsBookmark,BsBookmarkFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill ,GoHeart} from "react-icons/go";
import img1 from '../assets/img1.jpeg'

const Pin = ({ pin , handler, handleLikeItem }) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const [alreadySave, setAlreadySave] = useState(false);
  const [alreadyLike, setAlreadyLike] = useState(false);
  const [loop, setloop] = useState([1,2]);

  function handleCart(){
  }

  https://www.artsy.net/artist-series/kaws-toys

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => handler(pin.id)}
        className=" relative cursor-pointer w-auto h-96 hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <img className="rounded-lg w-full h-full object-cover " src={img1} alt="user-post" /> 

        {postHovered && (
            <div className="absolute top-0 w-full h-full flex flex-col justify-between  z-10" style={{ height: '100%' }} >
              <div></div>
              {/* <div className=" flex items-center justify-between p-1 px-2.5 pt-2 pb-2 h-14 bg-gradient-to-b from-black">
                <div className="flex gap-2 px-6">
                    <h3 className=' text-red-500 font-medium text-sm truncate max-w-[80%]'>{pin?.description}</h3>
                </div>
                </div> */}
                <div className=" flex items-center justify-between p-1 px-2.5 pt-4 pb-2 h-14 ">
                    {/* <div className=' absolute w-full h-full bg-gradient-to-t from-black'></div> */}
                    {/* <div className="flex gap-2">
                        <h3 className=' text-white font-medium text-sm'>Packages, and audited</h3>
                    </div> */}
                    <div className=' flex items-center gap-1'>
                    {alreadySave ? (
                        <button onClick={(e) => { 
                            e.stopPropagation();
                            setAlreadySave(!alreadySave);
                        }}
                        type="button"
                        className="bg-white w-8 h-8 p-1 rounded-full flex items-center justify-center text- text-xl hover:opacity-75  hover:shadow-md outline-none"
                        >
                        <BsBookmarkFill className=' h-4 w-4 text-red-500'/>
                        </button>
                    ) : (
                        <button onClick={(e) => { 
                            e.stopPropagation();
                            setAlreadySave(!alreadySave);
                        }}
                        type="button"
                        className="bg-white w-8 h-8 p-1 rounded-full flex items-center justify-center text-dark text-xl hover:opacity-75  hover:shadow-md outline-none"
                        >
                        <BsBookmark className=' h-4 w-4'/>
                        </button>
                    )}
                    {alreadyLike ? (
                        <button onClick={(e) => { 
                            e.stopPropagation();
                            setAlreadyLike(!alreadyLike);
                        }}
                        type="button"
                        className="bg-white w-8 h-8 p-1 rounded-full flex items-center justify-center text- text-xl hover:opacity-75  hover:shadow-md outline-none"
                        >
                        <GoHeartFill className=' h-4 w-4 text-red-500'/>
                        </button>
                    ) : (
                        <button onClick={(e) => { 
                            e.stopPropagation();
                            handleLikeItem(pin.id)
                            setAlreadyLike(!alreadyLike);
                        }}
                        type="button"
                        className="bg-white w-8 h-8 p-1 rounded-full flex items-center justify-center text-dark text-xl hover:opacity-75  hover:shadow-md outline-none"
                        >
                        <GoHeart className=' h-4 w-4'/>
                        </button>
                    )}
                    
                    </div>
                    
                </div>
                
            </div>
        )}
        
      </div>
      <a href='#' className="flex gap-2 mt-2 items-center">
        <img
          className="w-8 h-8 min-w-[32px] rounded-full object-cover"
          src={img1}
          alt="user-profile"
        />
        <p className="font-medium text-sm truncate">{pin?.description}</p>
      </a>
    </div>
  );
};

export default Pin;







//   <div className="flex items-center justify-between">
//   {loop?.length !== 0 ? (
//     <button type="button" className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none">
//       2 Saved
//     </button>
//   ) : (
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         // savePin(_id);
//       }}
//       type="button"
//       className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
//     >
//       Save
//     </button>
//   )}
// </div>
// <div className=" flex justify-between items-center gap-2 w-full">
//   {destination?.slice(8).length > 0 ? (
//     <a
//       href='#'
//       target="_blank"
//       className="bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md"
//       rel="noreferrer"
//     >
//       {' '}
//       <BsFillArrowUpRightCircleFill />
//       {/* {destination?.slice(8, 17)}... */}
//     </a>
//   ) : undefined}
//   {
// //    postedBy?._id === user?.googleId && (
// <button
//  type="button"
//  onClick={(e) => {
//    e.stopPropagation();
// //    deletePin(_id);
//  }}
//  className="bg-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100 outline-none"
// >
//  <AiTwotoneDelete />
// </button>
// //    )
// }
// </div>