import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './Customization/customizationReducer';
import authReducer from "./Auth/reducer"

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  auth:authReducer
});

export default reducer;
