import { createSlice } from '@reduxjs/toolkit';

const ContestStatusReducer = createSlice({
  name: 'contestStatus',
  initialState: {
    number: 1,
  },
  reducers: {
    setNumberIncrease: (state, action) => ({
      ...state,
      number: state.number + 1,
    }),
  },
});

export default ContestStatusReducer.reducer;
export const ContestStatusActions = ContestStatusReducer.actions;
