import { createSlice } from '@reduxjs/toolkit';

interface IDocExplorerSliceState {
  isVisible: boolean;
  isLoading: boolean;
  error: {
    isError: boolean;
    message: string;
  };
  toggleAndReload: boolean;
}

const initialState: IDocExplorerSliceState = {
  isVisible: false,
  isLoading: true,
  error: {
    isError: false,
    message: '',
  },
  toggleAndReload: false,
};

export const docExplorerSlice = createSlice({
  name: 'docexplorer',
  initialState,
  reducers: {
    showDocExplorer(state) {
      state.isVisible = true;
    },
    hideDocExplorer(state) {
      state.isVisible = false;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    setIsError(state, action) {
      state.error = action.payload.error;
    },
    startReload(state) {
      state.toggleAndReload = !state.toggleAndReload;
    },
  },
});

export const { showDocExplorer, hideDocExplorer, setIsLoading, setIsError, startReload } =
  docExplorerSlice.actions;

export default docExplorerSlice.reducer;
