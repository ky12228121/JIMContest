import { createSlice } from '@reduxjs/toolkit';

const EventStatusReducer = createSlice({
  name: 'contestStatus',
  initialState: {
    number: 0,
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

export default EventStatusReducer.reducer;
export const EventStatusActions = EventStatusReducer.actions;
