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

const store = configureStore({ reducer });
export type RootState = ReturnType<typeof reducer>;
export default store;
