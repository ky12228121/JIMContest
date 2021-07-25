import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import contestResultReducer from './contestResultReducer';
// import timerReducer from './timerReducer';
import userReducer from './UserReducer';
// import contestStatusReducer from './contestStatusReducer';
const reducer = combineReducers({
  // contestResult: contestResultReducer,
  // timer: timerReducer,
  user: userReducer,
  // contestStatus: contestStatusReducer,
});

const store = configureStore({ reducer });

export default store;
