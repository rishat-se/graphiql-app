import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthSliceState {
  isAuth: boolean;
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IAuthSliceState = {
  isAuth: false,
  email: null,
  token: null,
  id: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<IAuthSliceState>) {
      state.isAuth = action.payload.isAuth;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    singOut(state) {
      state.isAuth = false;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export default authSlice.reducer;
