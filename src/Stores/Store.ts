import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import 'react-redux';
import reduxThunk from 'redux-thunk';

import userReducer from './UserReducer';
import contestResult from './ContestResultReducer';
import contestStatus from './ContestStatusReducer';
const reducer = combineReducers({
  user: userReducer,
  contestResult: contestResult,
  contestStatus: contestStatus,
});

const reducers = configureStore({ reducer });
const store = configureStore({ reducers, middleware: [reduxThunk] });

export default store;
