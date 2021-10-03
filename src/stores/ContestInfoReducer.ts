import { createSlice } from '@reduxjs/toolkit';
const ContestInfoReducer = createSlice({
  name: 'contestInfo',
  initialState: {
    contestInfo: [],
  },
  reducers: {
    setContestInfo: (state, action) => ({
      ...state,
      contestInfo: action.payload,
    }),
  },
});

export default ContestInfoReducer.reducer;
export const ContestInfoActions = ContestInfoReducer.actions;
