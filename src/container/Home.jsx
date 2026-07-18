import React, { useState, useEffect, useContext } from 'react';
import StateContext from '../context/StateContext';
import { Route ,Routes } from 'react-router-dom'
import  CustomerDashboard  from '../components/Dashboard'
import Header from '../components/headers/Header'
import Footer from '../components/Footer'
import Profile from './customer/Profile'
import Settings from './customer/Settings'
import MainContainer from '../components/admin/MainContainer'



export function Home(props) {
    
    const { authUser } = useContext(StateContext);

    return (
        <>
        
        {!authUser.is_admin ? (
            <>
            <Header />
            <Routes>
                <Route path='/' element={<CustomerDashboard />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
            <Footer />
            </>
        ): (
            <>
            <Routes>
                <Route path='/*' element={<MainContainer />} />
            </Routes>
            </>
        )}
            
        </>
    )
}
