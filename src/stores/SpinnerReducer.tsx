import { createSlice } from '@reduxjs/toolkit';

const SpinnerReducer = createSlice({
  name: 'spinner',
  initialState: {
    spinnerFlag: false,
  },
  reducers: {
    setSpinnerFlag: (state, action) => ({
      ...state,
      spinnerFlag: action.payload,
    }),
  },
});

export default SpinnerReducer.reducer;
export const SpinnerActions = SpinnerReducer.actions;
