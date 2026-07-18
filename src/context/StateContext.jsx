import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "../api/axios";



const StateContext = createContext({});

export const StateProvider = ({ children }) => {


    const backendBaseUrl = 'http://127.0.0.1:7100/api/v1'

    const [isHome, setIsHome] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(window.location.pathname);

    const [ authUser , setAuthUser  ] = useState(()=> JSON.parse(localStorage.getItem('authUser'))|| null);
    const [ authUserToken , setAuthUserToken  ] = useState(()=> JSON.parse(localStorage.getItem('tokens'))|| null);


    function displayNotification(type, text ){
        if(type==='success'){
            toast.success(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else if(type==='error'){
            toast.error(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            toast(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    useEffect(() => {
        if (currentLocation === '/') {
          setIsHome(true);
        } else {
          setIsHome(false);
        }
    }, [currentLocation]);

    
    const setUser = (name) => {
        setAuthUser(name)
        localStorage.setItem('authUser', JSON.stringify(name))
        // window.location['href'] = "/";
    }


    const loginUser = async (email, password) => {

        try {
            const response = await axios.post(`${backendBaseUrl}/auth/refresh`,
            JSON.stringify({ email: email, password: password, }), 
            {
                headers : {  'Content-Type': 'application/json'}
            }) 
            
            console.log(response.data)
        }catch (error){
            if (!error?.response){
                console.log('No response from server')
            }else if ( error.response?.status == 400 ){
                console.log(error.response?.data.detail)
                displayNotification('error', error.response?.data?.detail)
            }
        }


        try {
            const response = await fetch(`${backendBaseUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            if (!response.ok) {
                // Handle non-successful responses here
                if ( response.status == 400 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                }else if ( response.status == 403 ){
                    const data = await response.json()
                    displayNotification('error', data.detail)
                }
            }
            const data = await response.json();
    
            // Assuming the response includes a 'name' property
            const user = data.user;
            const tokens = data.tokens;
            console.log(user)
            console.log(tokens)
            // setAuthUser(user)
            // setAuthUserToken(tokens)
            // localStorage.setItem('authUser', JSON.stringify(user));
            // localStorage.setItem('tokens', JSON.stringify(tokens));
            
    
            // Redirect to home page or perform any other action upon successful login
            // window.location.href = "/";
    
        } catch (error) {
            
        }
    };
    


    const logoutUser = () => {
        setAuthUser(null)
        localStorage.removeItem('authUser');
        window.location['href'] = "/";
    }

    useEffect(() => {

    },[authUser])

    const value  = { authUser, authUserToken, setAuthUserToken , setUser , logoutUser , displayNotification ,loginUser, backendBaseUrl}

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext;