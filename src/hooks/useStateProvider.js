import { useContext } from "react";
import  StateContext from "../context/StateContext";

const useStateProvider = () => {
    return useContext(StateContext);
}

export default useStateProvider;