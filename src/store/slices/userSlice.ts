import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthSliceState {
  isAuth: boolean;
  email: string | null;
}

const initialState: IAuthSliceState = {
  isAuth: false,
  email: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<IAuthSliceState>) {
      state.isAuth = action.payload.isAuth;
      state.email = action.payload.email;
    },
    singOut(state) {
      state.isAuth = false;
      state.email = null;
    },
  },
});

export default authSlice.reducer;
