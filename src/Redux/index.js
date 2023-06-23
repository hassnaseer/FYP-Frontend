import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from 'redux-persist'
import LocalStorage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer";


const persistConfig = {
  key: 'xxxx-key-xxxx',
  storage: LocalStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default createStore(
  persistedReducer,
  applyMiddleware(thunk)
);