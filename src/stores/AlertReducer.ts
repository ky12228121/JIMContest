import { createSlice } from '@reduxjs/toolkit';
import { alertInfoDefault } from '../types/defalut';
const AlertReducer = createSlice({
  name: 'alert',
  initialState: {
    alertOpenFlag: false,
    alertInfo: alertInfoDefault,
  },
  reducers: {
    setAlertInfo: (state, action) => ({
      ...state,
      alertInfo: action.payload,
    }),
    setAlertOpenFlag: (state, action) => ({
      ...state,
      alertOpenFlag: action.payload,
    }),
  },
});

export default AlertReducer.reducer;
export const AlertActions = AlertReducer.actions;
