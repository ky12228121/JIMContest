import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'user',
  initialState: {
    username: '',
  },
  reducers: {
    setUsername: (state, action) => ({
      ...state,
      username: action.payload,
    }),
  },
});

export default userReducer.reducer;
export const userActions = userReducer.actions;
