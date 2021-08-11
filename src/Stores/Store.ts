import { configureStore } from '@reduxjs/toolkit';
import 'react-redux';
import { combineReducers } from 'redux';
import contestResult from './ContestResultReducer';
import contestStatus from './ContestStatusReducer';
import userReducer from './UserReducer';

const reducer = combineReducers({
  user: userReducer,
  contestResult: contestResult,
  contestStatus: contestStatus,
});

const store = configureStore({ reducer });
export type RootState = ReturnType<typeof reducer>;
export default store;
