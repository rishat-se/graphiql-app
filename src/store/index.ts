import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { editorSlice } from './slices/editorSlice';
import authReducer from './slices/userSlice';

const rootReducer = combineReducers({
  authReducer,
  [editorSlice.name]: editorSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
