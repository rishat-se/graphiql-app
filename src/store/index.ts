import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { editorSlice } from './slices/editorSlice';
import authReducer from './slices/userSlice';
import { docExplorerSlice } from './slices/docexplorerSlice';

const rootReducer = combineReducers({
  authReducer,
  [editorSlice.name]: editorSlice.reducer,
  [docExplorerSlice.name]: docExplorerSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
