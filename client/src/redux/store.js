import { combineReducers, configureStore } from '@reduxjs/toolkit'
import useReducer  from './user/userSlice'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer=combineReducers({user:useReducer})


const persistedReducer=persistReducer({
  key:'root',
  version:1,
  storage,
  
},rootReducer)
export const store = configureStore({
    reducer: {persistedReducer},
    
  })
  export const persistor = persistStore(store)