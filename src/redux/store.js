import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import persistReducer from 'redux-persist/es/persistReducer';
import selectedCurrenyReducer from './reducers/selectedCurrencyReducer';
import selectedBackgroundColor from './reducers/themeReducer';

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const allReducers = combineReducers({
  selectedCurrenyReducer: selectedCurrenyReducer,
  selectedBackgroundColor: selectedBackgroundColor,
});

let persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  },
  {},
  applyMiddleware(thunk),
);
