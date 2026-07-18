import axios from '../api/axios';
import useAuth from './useAuth';
import { useEffect , useContext } from "react";
import StateContext from "../context/StateContext";

const useRefreshToken = () => {
    const { setAuthUserToken } = useContext(StateContext);

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuthUserToken(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {
                ...prev,
                access: response.data.access
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
