import {combineReducers, applyMiddleware} from  'redux';


import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './reducers/favoriteReducer';



const allReducers = combineReducers({
  favoriteReducer: favoriteReducer
})

export const store = configureStore({reducer: allReducers}, {}, applyMiddleware(thunk));