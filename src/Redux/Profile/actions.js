import axios from "axios";
import { toast } from "react-toastify";
import {UPDATE_PROFILE,GET_PROFILE} from "./const"
import config from "../../config";

let Base_Url = config.BASE_URL_API;

export const UpdateProfile = (payload) => async (dispatch) => {
  const { email, password, fname} = payload;
        let url = `${Base_Url}hotels/onboard-hotel`;
        let data = {
          email: email,
          password: password,
          fullName:fname
        };
        let axiosConfig = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    try{
      let response = await axios.post(url, data, axiosConfig);
      dispatch({
          type: UPDATE_PROFILE,
          payload: response.data,
      });
      toast.success(response.data.message);
    }
    catch(err){
        console.log(err)
    }
};

export const getProfile = (payload) => async (dispatch) => {
    const {id} = payload;
        let url = `${Base_Url}profile?${id}`;
        let axiosConfig = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          let response = await axios.get(url, axiosConfig);
        dispatch({
            type: GET_PROFILE,
            payload: response.data,
        });
       }
       catch(err){
        toast.error(err.response.data.message);
       }
};
