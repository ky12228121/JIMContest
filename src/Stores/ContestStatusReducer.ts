import { createSlice } from '@reduxjs/toolkit';

const ContestStatusReducer = createSlice({
  name: 'contestStatus',
  initialState: {
    number: 1,
    isFinish: false,
  },
  reducers: {
    setNumberIncrease: (state, action) => ({
      ...state,
      number: state.number + 1,
    }),
    setFinish: (state, action) => ({
      ...state,
      isFinish: true,
    }),
  },
});

export default ContestStatusReducer.reducer;
export const ContestStatusActions = ContestStatusReducer.actions;
