import { createSlice } from '@reduxjs/toolkit';
import { eventResultDefault } from '../types/defalut';
const EventResultReducer = createSlice({
  name: 'eventResult',
  initialState: {
    result1: eventResultDefault,
    result2: eventResultDefault,
    result3: eventResultDefault,
    result4: eventResultDefault,
    result5: eventResultDefault,
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

export default EventResultReducer.reducer;
export const EventResultActions = EventResultReducer.actions;
