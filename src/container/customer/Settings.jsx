import React, { useState , useContext  } from 'react';
import { motion } from 'framer-motion';
import StateContext from '../../context/StateContext';
import Confirm from '../../components/modals/Confirm'
import Password from '../../components/settings/Password'
import Personal from '../../components/settings/Personal'

export default function Settings(props) {

    const {logoutUser, displayNotification } = useContext(StateContext)

    const [showSignOutConfirmModal , setShowSignOutConfirmModal] = useState(false)
    const [showDeleteAccountConfirmModal , setShowDeleteAccountConfirmModal] = useState(false)

    const handleSignoutConfirm = (e) => {

        if ( e) {
            logoutUser()
        }else{
            setShowSignOutConfirmModal(false)
        }
    }

    const handleDdeleteAccountConfirm = (e) => {
        if ( e) {
            logoutUser()
        }else{
            setShowDeleteAccountConfirmModal(false)
            displayNotification('error', 'Are you sure you want to sign out?')
        }
    }

    return (
        <>
            <main>
                
                {showSignOutConfirmModal && <Confirm confirmMessage='Are you sure you want to sign out?' setShowModal={handleSignoutConfirm} />}
                {showDeleteAccountConfirmModal && <Confirm confirmMessage='Are you sure you want to delete your account? Note the operation is irreversible' setShowModal={handleDdeleteAccountConfirm} />}
                

                <div className="mx-auto  max-w-6xl p-4 md:p-6 2xl:p-10">
                    <div className="mx-auto max-w-270">
                        <div className="grid grid-cols-5 gap-8">
                            <Personal />
                            
                            <Password />
                            <div className="col-span-5 md:col-span-3">
                                <div className="rounded-sm border border-stroke bg-white shadow-default dark:bg-boxdark">
                                    <div className="border-b border-stroke py-4 px-7">
                                        <h3 className="font-medium text-black">
                                        Account
                                        </h3>
                                    </div>
                                    <div className="p-7">

                                        <div className=' grid grid-cols-2 gap-4'>
                                            <button onClick={() => setShowSignOutConfirmModal(true)}
                                            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1"
                                            type="submit">
                                            Sign Out
                                            </button>
                                            <motion.button whileTap={{ scale: 0.75 }}  onClick={() => setShowDeleteAccountConfirmModal(true)}
                                            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-white bg-red-600 hover:shadow-1"
                                            type="submit">
                                            Delete my account
                                            </motion.button>
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
