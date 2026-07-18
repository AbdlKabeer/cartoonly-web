import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StateContext from "../context/StateContext";
import queryString from "query-string";
import axios from "axios";
import InnerLoading from "../components/InnerLoading";


// const { BACKEND_API_URL } = process.env;

const SocialAuth = () => {

  let location = useLocation();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { authUser, setUser } = useContext(StateContext);

  useEffect(() => {
    const values = queryString.parse(location.search);
    const code = values.code ? values.code : null;

    if (code) {
      onGogglelogin();
    }
  }, []);

  const googleLoginHandler = (code) => {
    return axios
      .get(`http://127.0.0.1:8000/api/v1/auth/login/google/${code}`)
      .then((res) => {
        setUser(res.data.user.first_name)
        localStorage.setItem("authUser", JSON.stringify(res.data.user.first_name));
        navigate("/");
        return res.data;
      })
      .catch((err) => {
        setError(err);
        return err;
      });
  };

  const onGogglelogin = async () => {
    const response = await googleLoginHandler(location.search);
    if (response.data.access) {
      navigate("/");
    }
  }

  return (
    <div className=" w-full h-screen">
        <InnerLoading />
    </div>
  );
};


export default SocialAuth;