import {LOGIN,SIGN_UP} from "./const"
const initialState = {
    login: "",
    signUp:"",
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          login: action.payload,
        };
        case SIGN_UP:
        return {
          ...state,
          signUp: action.payload,
        };
      default:
        return state;
    }
  };