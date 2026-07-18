import React, { useState , useContext  } from 'react';
import { motion } from 'framer-motion';
import StateContext from '../../context/StateContext';
import Confirm from '../modals/Confirm'


export default function Password(props) {
    const {displayNotification,backendBaseUrl,authUserToken } = useContext(StateContext)
    const [showPasswordResetConfirm , setShowPasswordResetConfirm] = useState(false)

    const [formData , setFormData ] = useState({
        'old_password':"",
        'new_password':"",
        'confirm_password':"",
    })

    const  handlePasswordResetSubmit = async (e) => {
        e.preventDefault()
        if ( formData.old_password && formData.new_password && formData.confirm_password){
            if ( formData.new_password !== formData.confirm_password ){
                displayNotification('error','New password does not match confirm password')
            }else{setShowPasswordResetConfirm(true)}
        }else{
            displayNotification('error','All fields are required')
        }
        
        
    }

    const handleConfirmPopUp = async (response) => {
        if (response){
            try {
                const response = await fetch(`${backendBaseUrl}/auth/change-password`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${authUserToken?.access}`
                    },
                    body: JSON.stringify({
                        'old_password':formData.old_password,
                        'password1':formData.new_password,
                        'password2':formData.confirm_password,
                    }),
                });
                if (!response.ok) {
                    if ( response.status == 400 ){
                        const data = await response.json()
                        displayNotification('error', data.detail)
                    }else if ( response.status == 403 ){
                        const data = await response.json()
                        displayNotification('error', data.detail)
                    }
                }
                const data = await response.json();
                displayNotification('success', data.detail)
                setFormData({
                    'old_password':"",
                    'new_password':"",
                    'confirm_password':"",
                });
        
            } catch (error) {
                
            }
            setShowPasswordResetConfirm(false)
        }
        else{
            setFormData({
                'old_password':"",
                'new_password':"",
                'confirm_password':"",
            });
            setShowPasswordResetConfirm(false)
        }

    }

    const updateFormData = (key , value) => {
        setFormData({
            ...formData,  
            [key]: value, 
        });
        
    };
    
    console.log(formData)

    return (
        <>
            {showPasswordResetConfirm && <Confirm confirmMessage='Are you sure you want change your password?' setShowModal={handleConfirmPopUp} />}
            <div className="col-span-5 md:col-span-3">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-7">
                        <h3 className="font-medium text-black">
                        Password
                        </h3>
                    </div>
                    <div className="p-7">
                        <form action="#" className=' flex flex-col gap-4' onSubmit={(e) => handlePasswordResetSubmit(e)}>
                        

                            <div className="mb-5.5">
                                <div className="w-full">
                                    <label className="mb-3 block text-sm font-medium" >
                                        Your Current Passowrd
                                    </label>
                                    <input onChange={(e)=>updateFormData('old_password',e.target.value)} value={formData.old_password}  className='custom-input' type="password" placeholder=""  />
                                
                                </div>
                            </div>
                            <div className="mb-5.5 flex flex-col gap-4 sm:flex-row">
                                <div className="w-full sm:w-1/2">
                                    <label className="mb-3 block text-sm font-medium" >
                                        New Password</label>
                                    <input onChange={(e)=>updateFormData('new_password',e.target.value)} value={formData.new_password}  className='custom-input' type="password" placeholder=""  />
                                
                                </div>

                                <div className="w-full sm:w-1/2">
                                    <label className="mb-3 block text-sm font-medium" >
                                    Confirm Passowrd
                                    </label>
                                    <input onChange={(e)=>updateFormData('confirm_password',e.target.value)} value={formData.confirm_password}  className='custom-input' type="password" placeholder=""  />
                                
                                </div>

                            </div>



                            <div className="flex justify-end gap-4.5">
                                <motion.button whileTap={{ scale: 0.75 }} 
                                className="dark-button"
                                type="submit">
                                 Save Changes
                                </motion.button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div> 
        </>
    )
}
