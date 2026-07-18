import React , { useEffect , useRef , useState } from 'react'
import { Link, Route ,Routes } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import Dashbaord from '../../container/admin/Dashbaord'
import Purchase from '../../container/admin/Purchase'
import Users from '../../container/admin/Users'
import Profile from '../../container/admin/Profile'
import Settings from '../../container/admin/Settings'
import FAQ from '../../container/admin/app/FAQ'
import Portrait from '../../container/admin/app/Portrait'
import UserDetail from '../../container/admin/UserDetail'

export default function MainContainer(props) {
    
    const [showAdminSideBarMobile, setShowAdminSideBarMobile ] = useState(false);

    return (
        <>
           <div className="flex h-screen overflow-hidden bg-[#f1f5f9]">
                <SideBar showAdminSideBarMobile={showAdminSideBarMobile} />
                <div className="flex flex-col flex-1 relative overflow-x-hidden overflow-y-auto">
                <Header showAdminSideBarMobile={showAdminSideBarMobile}  setShowAdminSideBarMobile={setShowAdminSideBarMobile}/>
                <main>
                    <div className="max-w-screen-2xl mx-auto p-4 md:p-6 2xl:p-10">
                        <Routes>
                            <Route path='/' element={<Dashbaord />} />
                            <Route path='dashboard' element={<Dashbaord />} />
                            <Route path='purchase' element={<Purchase />} />
                            <Route path='users' element={<Users />} />
                            <Route path='users/:id' element={<UserDetail />} />
                            <Route path='account' element={<Profile />} />
                            <Route path='account/profile' element={<Profile />} />
                            <Route path='account/settings' element={<Settings />} />
                            <Route path='app/faqs' element={<FAQ />} />
                            <Route path='app/protarits' element={<Portrait />} />
                        </Routes>
                   
                    </div>
                </main>
                </div>
            </div>   
        </>
    )
}
