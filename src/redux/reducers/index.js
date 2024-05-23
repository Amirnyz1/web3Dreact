import dataReducer from './dataReducer/dataReducer'
import notesData from './notesData/notesData';
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
    data : dataReducer,
    noteD : notesData,
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['data','noteD']},combinedReducers)
export default persistedReducers