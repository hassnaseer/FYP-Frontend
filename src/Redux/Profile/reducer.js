import {UPDATE_PROFILE,GET_PROFILE} from "./const"
const initialState = {
    updateProfile: "",
    getProfile:"",
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PROFILE:
        return {
          ...state,
          updateProfile: action.payload,
        };
        case GET_PROFILE:
        return {
          ...state,
          getProfile: action.payload,
        };
      default:
        return state;
    }
  };