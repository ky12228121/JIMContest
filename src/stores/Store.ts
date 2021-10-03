import { configureStore } from '@reduxjs/toolkit';
import 'react-redux';
import { combineReducers } from 'redux';
import eventResult from './EventResultReducer';
import eventStatus from './EventStatusReducer';
import user from './UserReducer';
import alert from './AlertReducer';
import spinner from './SpinnerReducer';
import contestInfo from './ContestInfoReducer';

const reducer = combineReducers({
  user: user,
  eventResult: eventResult,
  eventStatus: eventStatus,
  alert: alert,
  spinner: spinner,
  contestInfo: contestInfo,
});

const store = configureStore({ reducer });
export type RootState = ReturnType<typeof reducer>;
export default store;
