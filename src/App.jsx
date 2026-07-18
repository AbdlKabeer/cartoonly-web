import { useState, useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './container/Home'
import { Welcome } from './container/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StateContext from './context/StateContext';
import Login from './container/Login';
import ForgetPassword from './container/ForgetPassword';
import SetPassword from './container/SetPassword';
import SocialAuth from './container/SocialAuth';


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {
  const [count, setCount] = useState(0)

  const { authUser } = useContext(StateContext);

  useEffect(() => {
  },[authUser])


  return (
    <div className=' text-sm font-normal'>
      <ToastContainer />
      <Router>
        <Routes>
          {!authUser ? (
            <>
              <Route path="/" element={<Welcome />} />
              <Route path="/google" element={<SocialAuth />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<SetPassword />} />
            </>
            
          ): (
            <>
              <Route path="/*" element={<Home />} />
            </>
          )}

          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
