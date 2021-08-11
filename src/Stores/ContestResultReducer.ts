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
      let newState = { ...state };
      switch (resultNumber) {
        case 1:
          newState = {
            ...state,
            result1: {
              result: action.payload.result,
              penalty: 'no',
            },
          };
          break;
        case 2:
          newState = {
            ...state,
            result2: {
              result: action.payload.result,
              penalty: 'no',
            },
          };
          break;
        case 3:
          newState = {
            ...state,
            result3: {
              result: action.payload.result,
              penalty: 'no',
            },
          };
          break;
        case 4:
          newState = {
            ...state,
            result4: {
              result: action.payload.result,
              penalty: 'no',
            },
          };
          break;
        case 5:
          newState = {
            ...state,
            result5: {
              result: action.payload.result,
              penalty: 'no',
            },
          };
          break;
        default:
          break;
      }
      return newState;
    },
    setPenalty: (state, action) => {
      const resultNumber = action.payload.number;
      let newState = { ...state };
      switch (resultNumber) {
        case 1:
          newState = {
            ...state,
            result1: {
              result: state.result1.result,
              penalty: action.payload.penalty,
            },
          };
          break;
        case 2:
          newState = {
            ...state,
            result2: {
              result: state.result2.result,
              penalty: action.payload.penalty,
            },
          };
          break;
        case 3:
          newState = {
            ...state,
            result3: {
              result: state.result3.result,
              penalty: action.payload.penalty,
            },
          };
          break;
        case 4:
          newState = {
            ...state,
            result4: {
              result: state.result4.result,
              penalty: action.payload.penalty,
            },
          };
          break;
        case 5:
          newState = {
            ...state,
            result5: {
              result: state.result5.result,
              penalty: action.payload.penalty,
            },
          };
          break;
        default:
          break;
      }
      return newState;
    },
  },
});

export default ContestResultReducer.reducer;
export const ContestResultActions = ContestResultReducer.actions;
