import { configureStore } from '@reduxjs/toolkit';
import 'react-redux';
import { combineReducers } from 'redux';
import contestResult from './ContestResultReducer';
import contestStatus from './ContestStatusReducer';
import user from './UserReducer';
import alert from './AlertReducer';

const reducer = combineReducers({
  user: user,
  contestResult: contestResult,
  contestStatus: contestStatus,
  alert: alert,
});

const store = configureStore({ reducer });
export type RootState = ReturnType<typeof reducer>;
export default store;
