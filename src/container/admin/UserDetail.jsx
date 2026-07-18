import React, { useState } from 'react'
import { motion } from 'framer-motion'
import cover1 from '../../assets/cover/cover-01.png'
import { MdFilterList } from 'react-icons/md'
import PurchaseDetail from '../../components/modals/admin/PurchaseDetail'
import PurchaseTableRow from '../../components/admin/PurchaseTableRow'

export default function UserDetail(props) {
    
    const backgroundImageUrl = "https://avatars.githubusercontent.com/u/95700260?v=4"

    const [ activeItem, setActiveItem ] = useState(null)
    

    const handleSetShowModalClick = (val) => {
        if(val){

        }else{
            setActiveItem(null)
        }
    }

    return (
        <>
            <main>
              <div className="mx-auto w-full max-w-screen-2xl md:p-6 2xl:p-10 ">
                <div className="">
                  <div className="overflow-hidden rounded-sm  bg-white ">
                    <div className="relative z-10 h-35 md:h-65" >
                    <div className="relative z-10 h-full w-full " >
                      <img src={cover1} alt="profile cover"
                        className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center" />
                    
                    </div>
                      
                    </div>
                    <div className="px-4 pb-6 ">
                      <div style={{ backgroundImage: `url(${backgroundImageUrl})`}}

                          className="relative z-10 -mt-22 h-full min-h-[150px] max-h-[150px] rounded-full bg-cover -translate-y-[50%] 
                              w-full min-w-[150px] max-w-[150px]  p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                              
                      </div>

                      <div className="">
                        <h3 className="mb-1.5 text-2xl"> Olanrewaju Abdul </h3>
                        <p className="font-medium">olakaycoder1@gmail.com</p>
                      
                        <div className="mx-auto max-w-180 h-32 md:h-2">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna</p>
                        </div>
                        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 my-12">
    
                            <h4 className="text-xl font-bold text-black pb-4">
                            User Purchases
                            </h4>


                            <div className='flex flex-col md:flex-row md:items-center justify-between pb-3'>
                                <div className=' flex flex-col md:flex-row md:items-center gap-2'>
                                    <div className=' flex justify-between'>
                                        <span className='max-w-fit flex items-center gap-2 border border-gray-300 p-2 py-2.5 text-sm rounded-lg cursor-pointer'>
                                            <MdFilterList  className=' h-5 w-5'/>
                                            <span>Filter by status</span>
                                        </span>
                                        {/* <button className=' dark-button md:hidden'>Export users</button> */}
                                    </div>
                                    
                                    {/* <input type="text" className='custom-input' /> */}
                                    <div className="relative ">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                            <span className="sr-only">Search icon</span>
                                        </div>
                                        <input type="text" id="search-navbar" onChange={()=> console.log('change')}  className="block w-full p-2 ps-10 text-sm  border border-gray-300 focus:border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:bg-gray-50  " placeholder="Search..." />

                                        
                                    </div>
                                </div>
                                {/* <button className='hidden md:block dark-button'>Export users</button> */}
                            </div>

                            {activeItem && <PurchaseDetail setShowModal={handleSetShowModalClick} /> }
                            

                            <div className="max-w-full overflow-x-auto">
                                <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-left ">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Item
                                    </th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                        Date
                                    </th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                        Type
                                    </th>
                                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                        Status
                                    </th>
                                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                                        Actions
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <UserPurchaseTableRow setActiveItem={setActiveItem}/>
                                    <UserPurchaseTableRow setActiveItem={setActiveItem} />
                                    <UserPurchaseTableRow setActiveItem={setActiveItem} />
                                    <UserPurchaseTableRow setActiveItem={setActiveItem} />
                                    <UserPurchaseTableRow setActiveItem={setActiveItem} />
                                    <UserPurchaseTableRow setActiveItem={setActiveItem} />   
                                </tbody>
                                </table>
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
        </>
    )
}








export function UserPurchaseTableRow({setActiveItem}) {
    

    return (
        <>
            <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <div>
                        <img src="https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-01.jpg" alt="" />
                    </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">Jan 13,2023</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                        Custom
                    </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                        Recieved
                    </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center place-content-center space-x-3.5">
                    <motion.button whileTap={{ scale: 0.75 }}  onClick={()=> setActiveItem(true) } className="hover:text-primary">
                        <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill="" />
                        <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill="" />
                        </svg>
                    </motion.button>
        
                    </div>
                </td>
            </tr>
        </>
    )
}
