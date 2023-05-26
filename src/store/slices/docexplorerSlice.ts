import { createSlice } from '@reduxjs/toolkit';

interface IDocExplorerSliceState {
  isVisible: boolean;
  isLoading: boolean;
  error: {
    isError: boolean;
    message: string;
  };
}

const initialState: IDocExplorerSliceState = {
  isVisible: false,
  isLoading: true,
  error: {
    isError: false,
    message: '',
  },
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
  },
});

export const { showDocExplorer, hideDocExplorer, setIsLoading, setIsError } =
  docExplorerSlice.actions;

export default docExplorerSlice.reducer;
