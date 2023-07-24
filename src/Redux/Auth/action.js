import axios from "axios";
import { toast } from "react-toastify";
import { LOGIN, SIGN_UP } from "./const"
import config from "../../config";

let Base_Url = config.BASE_URL_API;

export const SignUpRequest = (payload) => async (dispatch) => {
  const { email, password, fullName } = payload;
  let url = `${Base_Url}auth/register`;
  let data = {
    email: email,
    password: password,
    fullName:fullName
  };
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    let response = await axios.post(url, data, axiosConfig);
    dispatch({
      type: SIGN_UP,
      payload: response.data,
    });
    toast.success(response.data.message);
  }
  catch (err) {
    console.log(err)
  }
};

export const Login = (payload) => async (dispatch) => {
  localStorage.setItem("Token", "Token");
  // toast.success(response.data.message);
  setTimeout(() => {
    window.location.href = "/forms";
  }, 700)
  const { email, password } = payload;
  let url = `${Base_Url}auth/login`;
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
    let Token = response.data.accessToken;
    dispatch({
      type: LOGIN,
      payload: response.data,
    });
    localStorage.setItem("Token", Token);
    toast.success(response.data.message);
    setTimeout(() => {
      window.location.href = "/forms";
    }, 700)
  }
  catch (err) {
    toast.error(err.response.data.message);
  }
};

export const verifyEmail = (payload) => async () => {
  let url = `${Base_Url}auth/login-staff?${payload}`;
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    let response = await axios.post(url, axiosConfig);
    toast.success(response.data.message)
  } catch (err) {
    toast.err(err.data.message)
  }

}

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