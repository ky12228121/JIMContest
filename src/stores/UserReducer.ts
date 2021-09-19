import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'user',
  initialState: {
    id: '',
    username: '',
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      id: action.payload.id,
      username: action.payload.username,
    }),
  },
});

export default userReducer.reducer;
export const userActions = userReducer.actions;
