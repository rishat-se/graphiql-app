import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/userSlice';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
