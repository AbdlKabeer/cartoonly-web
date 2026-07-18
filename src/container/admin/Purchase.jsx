import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import BreakDownCard from '../../components/admin/BreakDownCard'
import { MdFilterList, MdOutlineSell } from "react-icons/md";
import PurchaseTableRow from '../../components/admin/PurchaseTableRow'
import PurchaseDetail from '../../components/modals/admin/PurchaseDetail';
import InnerLoading from '../../components/InnerLoading';


export default function Purchase(props) {
    

    const [ activeItem, setActiveItem ] = useState(null)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const handleSetShowModalClick = (val) => {
        if(val){

        }else{
            setActiveItem(null)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulate an API call with setTimeout
            await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate a delay of 1 second
    
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
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <BreakDownCard Icon={MdOutlineSell}  cardText="Total Purchase" cardCount="3.456K"  cardPercent="0.43"/>
                <BreakDownCard Icon={MdOutlineSell}  cardText="Pending Purchase" cardCount="56"  cardPercent="0.43"/>
            </div>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 my-12">
    
                <h4 className="text-xl font-bold text-black pb-4">
                Purchases
                </h4>

                {loading ? (
                    <InnerLoading />
                ): (
                    <>
                    <div className='flex flex-col md:flex-row md:items-center justify-between pb-3'>
                        <div className=' flex flex-col md:flex-row md:items-center gap-2'>
                            <div className=' flex justify-between'>
                                <motion.span whileTap={{ scale: 0.75 }}  className='max-w-fit flex items-center gap-2 border border-gray-300 p-2 py-2.5 text-sm rounded-lg cursor-pointer'>
                                    <MdFilterList  className=' h-5 w-5'/>
                                    <span>Filter by status</span>
                                </motion.span>
                                <motion.button whileTap={{ scale: 0.75 }}  className=' dark-button md:hidden'>Export users</motion.button>
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
                        <motion.button whileTap={{ scale: 0.75 }}  className='hidden md:block dark-button'>Export users</motion.button>
                    </div>

                    {activeItem && <PurchaseDetail setShowModal={handleSetShowModalClick} /> }
                    

                    <div className="max-w-full overflow-x-auto">
                    
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-left ">
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Customer
                                </th>
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                    Phone
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
                                <PurchaseTableRow setActiveItem={setActiveItem}/>
                                <PurchaseTableRow setActiveItem={setActiveItem} />
                                <PurchaseTableRow setActiveItem={setActiveItem} />
                                <PurchaseTableRow setActiveItem={setActiveItem} />
                                <PurchaseTableRow setActiveItem={setActiveItem} />
                                <PurchaseTableRow setActiveItem={setActiveItem} />   
                            </tbody>
                        </table>
                    
                        
                    </div>
                    </>
                )}
                
            </div>
    </>
    )
}
