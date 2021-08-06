import { createSlice } from '@reduxjs/toolkit';
import { contestResultDefault } from '../types/defalut';
const ContestResultReducer = createSlice({
  name: 'contestResult',
  initialState: {
    result1: contestResultDefault,
    result2: contestResultDefault,
    result3: contestResultDefault,
    result4: contestResultDefault,
    result5: contestResultDefault,
  },
  reducers: {
    setResult: (state, action) => {
      const resultNumber = action.payload.number;

      return {
        ...state,
        [`result${resultNumber}`]: {
          result: action.payload.result,
          penalty: 'no',
        },
      };
    },
    setPenalty: (state, action) => {
      const resultNumber = action.payload.number;
      return {
        ...state,
        [`result${resultNumber}`]: {
          penalty: action.payload.penalty,
        },
      };
    },
  },
});

export default ContestResultReducer.reducer;
export const ContestResultActions = ContestResultReducer.actions;
