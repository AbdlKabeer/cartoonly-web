import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import StateContext from '../../../context/StateContext';
import BreakDownCard from '../../../components/admin/BreakDownCard'
import { MdOutlineSell } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import AppFAQTableRow from '../../../components/admin/AppFAQTableRow';
import AppFAQ from '../../../components/modals/admin/AppFAQ';
import AppFAQEdit from '../../../components/modals/admin/AppFAQEdit';
import Confirm from '../../../components/modals/Confirm';
import AppAddFAQ from '../../../components/modals/admin/AppAddFAQ';
import InnerLoading from '../../../components/InnerLoading';



export default function FAQ(props) {
    

    const { displayNotification } = useContext(StateContext);
    const [ activeItem, setActiveItem ] = useState(null)
    const [ isActiveDeleteConfirm, setIsActiveDeleteConfirm ] = useState(null)
    const [ isDeleteItem, setIsDeleteItem ] = useState(null)
    const [ isEditClickItem, setIsEditClickItem ] = useState(null)
    const [ isAddItem, setIsAddItem ] = useState(null)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const handleSetShowModalClick = (val) => {
        if(val){
            console.log(activeItem)
        }else{
            setActiveItem(null)
        }
    }
    const handleIsActiveDeleteConfirmClick = (val) => {
        if(val){
            displayNotification('success', "Record successfully deleted")
        }else{
            setIsActiveDeleteConfirm(null)
        }
        setIsDeleteItem(false)
    }
    const handleIsActiveEditConfirmClick = (val) => {
        if(val){
            displayNotification('success', "Record successfully updated")
        }else{
            setIsActiveDeleteConfirm(null)
        }
        setIsEditClickItem(false)
    }
    const handleIsAddItemClick = (val) => {
        console.log(val)
        if(val){
            displayNotification('success', "Record successfully saved")
        }
        setIsAddItem(false)
    }

    const handleIsActiveDeleteClick = (val) => setIsDeleteItem(true);
    const handleIsActiveEditClick = (val) => setIsEditClickItem(true);

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
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <BreakDownCard Icon={BsQuestionCircle}  cardText="Total Questions" cardCount="3.456K"  cardPercent="0.43"/>
            </div>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 my-12">

                <div className=' flex items-center justify-between py-4'>
                    <h4 className="md:hidden text-xl font-bold text-black">
                        FAQ
                    </h4>
                    <h4 className="hidden md:block text-xl font-bold text-black">
                        Frequestly Ask Questions
                    </h4>
                    <motion.button whileTap={{ scale: 0.75 }}  onClick={()=> setIsAddItem(true)} className='dark-button'>Add new portrait</motion.button>
                </div>
               

                {activeItem && <AppFAQ setShowModal={handleSetShowModalClick} /> }
                {isDeleteItem && <Confirm confirmMessage="Are you sure you want to delete the item?" setShowModal={handleIsActiveDeleteConfirmClick} /> }
                {isEditClickItem && <AppFAQEdit setShowModal={handleIsActiveEditConfirmClick} /> }
                {isAddItem && <AppAddFAQ setShowModal={handleIsAddItemClick} /> }

                
                
                {loading ? (
                    <InnerLoading />
                ): (
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-left ">
                                <th className="min-w-[220px] py-4 px-4 font-medium text-black  xl:pl-11">
                                    Question
                                </th>
                                <th className="py-4 px-4 font-medium text-black ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <AppFAQTableRow setActiveItem={setActiveItem} handleDeleteClick={handleIsActiveDeleteClick} handleEditClick={handleIsActiveEditClick} />
                            <AppFAQTableRow setActiveItem={setActiveItem} handleDeleteClick={handleIsActiveDeleteClick} handleEditClick={handleIsActiveEditClick} />
                            <AppFAQTableRow setActiveItem={setActiveItem} handleDeleteClick={handleIsActiveDeleteClick} handleEditClick={handleIsActiveEditClick} />
                            <AppFAQTableRow setActiveItem={setActiveItem} handleDeleteClick={handleIsActiveDeleteClick} handleEditClick={handleIsActiveEditClick} />
                            <AppFAQTableRow setActiveItem={setActiveItem} handleDeleteClick={handleIsActiveDeleteClick} handleEditClick={handleIsActiveEditClick} />
                            <AppFAQTableRow setActiveItem={setActiveItem} handleDeleteClick={handleIsActiveDeleteClick} handleEditClick={handleIsActiveEditClick} />   
                        </tbody>
                        </table>
                    </div>
                )}

                
            </div>
    </>
    )
}
