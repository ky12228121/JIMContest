import { createSlice } from '@reduxjs/toolkit';
import { contestStatusDefault } from '../types/defalut';

const ContestStatusReducer = createSlice({
  name: 'contestStatus',
  initialState: {
    cube3: contestStatusDefault,
    oh3: contestStatusDefault,
    square1: contestStatusDefault,
  },
  reducers: {
    setCube3Increase: (state, action) => {
      return {
        ...state,
        cube3: { number: state.cube3.number + 1 },
      };
    },
    setOh3Increase: (state, action) => {
      return {
        ...state,
        cube3: { number: state.cube3.number + 1 },
      };
    },
    setSquare1Increase: (state, action) => {
      return {
        ...state,
        cube3: { number: state.cube3.number + 1 },
      };
    },
  },
});

export default ContestStatusReducer.reducer;
export const ContestStatusActions = ContestStatusReducer.actions;
