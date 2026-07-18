import React,{ useState , useEffect, useContext  }  from 'react'
import { motion } from 'framer-motion'
import Pin from './Pin'
import Card from './Card'
import { MdFilterList } from "react-icons/md";
import CustomPortrait from './modals/CustomPortrait';
import { useSearchParams } from 'react-router-dom'
import InnerLoading from './InnerLoading';
import StateContext from '../context/StateContext';

export default function CustomerDashboard(props) {
    
    const {displayNotification,backendBaseUrl,authUserToken } = useContext(StateContext)
    const [ showCart , setShowCart ] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const [ portraits , setPortraits ] = useState([1,2,3,4,5,6,7])
    const [ cartoonImages , setCartoonImages ] = useState(null)
    const [ currentPortrait , setCurrentPortrait ] = useState(null)
    const [showFilter, setShowFilter] = useState(false);
    const [activeModal, setActiveModal] = useState(true);

    function handleCartShow(condition){
        if (condition){
            setSearchParams({'__request_key': 'inputValue' }) 
        }
        else{
            setSearchParams((params) => {
                params.delete('__request_key');
                return params;
              });
        }
        
        setShowCart(!showCart)

    }
    async function handleInterestPurchase(id){
        setSearchParams({'__request_key': id }) 
        setShowCart(true)
        try {
            const response = await fetch(`${backendBaseUrl}/portrait/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${authUserToken?.access}`
                }
            });
            if (!response.ok) {
                if ( response.status == 404 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                    setSearchParams((params) => {
                        params.delete('__request_key');
                        return params;
                      });
                }
                else if ( response.status == 401 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                }else if ( response.status == 403 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                }
            }
            const data = await response.json();
            setCurrentPortrait(id)
            setCurrentPortrait(data.data)
            setLoading(false);
            
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLikeItem(id){
        try {
            const response = await fetch(`${backendBaseUrl}/portrait/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${authUserToken?.access}`
                },
                body: JSON.stringify({'portrait_id':id}),
            });
            if (!response.ok) {
                if ( response.status == 404 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                }
                else if ( response.status == 401 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                }else if ( response.status == 403 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                }
            }
            const data = await response.json();
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // Get the current value
        const activeItem = searchParams.get('__request_key');
        if (activeItem){
            console.log(activeItem)
            handleInterestPurchase(activeItem)
            setShowCart(true)
        }
    
      }, [searchParams,setSearchParams]);


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

        const fetchImages = async () => {
            try {
                const response = await fetch(`${backendBaseUrl}/portrait`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${authUserToken?.access}`
                    }
                });
                if (!response.ok) {
                    if ( response.status == 401 ){
                        const data = await response.json()
                        displayNotification('error', data.detail)
                    }else if ( response.status == 403 ){
                        const data = await response.json()
                        
                        displayNotification('error', data.detail)
                    }
                }
                const data = await response.json();
                setCartoonImages(data.results)
                setLoading(false);
                
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchImages()
        // fetchData();
    }, []); 



    return (
        <>
        {showCart && currentPortrait ? (
            <Card toggleCart={showCart} setToggleCart={handleCartShow} item={currentPortrait}/>
        ) : (
            <div className=' max-w-6xl w-full mx-auto py-8 sm:py-12 px-4 sm:px-6 '>
                {activeModal && <CustomPortrait setShowModal={setActiveModal} />}
            
            
                <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-6 '>
                    <div className=' flex justify-between sm:justify-normal gap-2 items-center '>
                        <div className='relative'>
                            <motion.span whileTap={{ scale: 0.75 }}  onClick={()=> setShowFilter(!showFilter)} className='max-w-fit flex items-center gap-2 border border-gray-300 p-2 py-2.5 text-sm rounded-lg cursor-pointer'>
                                <MdFilterList  className=' h-5 w-5'/>
                                <span>Filter</span>
                            </motion.span>
                            <div className={`${showFilter ? "block" : "hidden"} absolute left-0 z-10 mt-2  w-48 bg-white rounded-lg shadow border`}>
                                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input onChange={()=> console.log('change')}  id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                            <label htmlFor="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input onChange={()=> console.log('change')}  checked id="checkbox-item-5" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                            <label htmlFor="checkbox-item-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input onChange={()=> console.log('change')}  id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                            <label htmlFor="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                                        </div>
                                    </li>
                                    <li className=' py-2'>
                                        <motion.span whileTap={{ scale: 0.75 }}  onClick={()=> setShowFilter(false)}  className='text-white bg-customblack hover:bg-darkgray focus:outline-none font-medium rounded-md text- px-5 py-2.5 text-center mb-2  cursor-pointer'>
                                            <span>Clear Filter</span>
                                        </motion.span>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                            
                        <motion.button whileTap={{ scale: 0.75 }}  onClick={()=> setActiveModal(true)} className='dark-button'>
                            <span>Get Custom Portrait</span>
                        </motion.button>
                    </div>
                    
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" onChange={()=> console.log('change')}  className="block w-full p-2 ps-10 text-sm  border border-gray-300 focus:border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:bg-gray-50  " placeholder="Search..." />
                    </div>
                </div>
                {/* <h1 className=' text-base font-medium'>Cartoon Portrait</h1> */}
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">Explore amazing designs</h2>
                    <p className="mb-8 font-light  lg:mb-16 sm:text-xl ">
                    800 inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration?
                        </p>
                </div> 
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {loading ? (
                       <>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       <div role="status" className="max-w-sm animate-pulse h">
                        <div className=" h-72 bg-gray-200 rounded  w-auto mb-4"></div>
                       </div>
                       </>
                    ): (
                        <>
                        {cartoonImages ? cartoonImages.map((item,index) => (<Pin key={index} pin={item} handler={handleInterestPurchase} handleLikeItem={handleLikeItem}/>)) : <></>}
                        </>
                    )}
                    
                </div>
                
            </div>
        )}
        </>
    )
}
