import axios from "axios";
import { toast } from "react-toastify";
import {LOGIN} from "./const"
import config from "../../config";

let Base_Url = config.BASE_URL_API;

export const SignUpRequest = (payload) => async () => {
    try{
     console.log(payload)
    }
    catch(err){
        console.log(err)
    }
};

export const Login = (payload) => async (dispatch) => {
    const { email, password } = payload;
        let url = `${Base_Url}auth/login-staff`;
        let data = {
          email: email,
          password: password,
        };
        let axiosConfig = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          let response = await axios.post(url, data, axiosConfig);
        let Token = response.data.token;
        dispatch({
            type: LOGIN,
            payload: response.data,
        });
        localStorage.setItem("Token", Token);
        toast.success(response.data.message);
      //payload.setBtnState(false);
        setTimeout(()=>{
        window.location.href="/";
        }, 700)
       }
       catch(err){
        toast.error(err.response.data.message);
       }
};

export const isLogin = () => {
    let token = localStorage.getItem("Token");
    if (token) {
      return true;
    }
    return false;
};
  
export const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
    // window.location.reload();
};