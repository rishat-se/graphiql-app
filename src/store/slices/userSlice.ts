import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthSliceState {
  isAuth: boolean;
}

const initialState: IAuthSliceState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;
