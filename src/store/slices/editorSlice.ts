import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IEditorInitialState {
  reqValue: string;
  variables: string;
  headers: string;
}

const initialState: IEditorInitialState = {
  reqValue: '',
  variables: '',
  headers: '',
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },

    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export const { setVariables, setHeaders } = editorSlice.actions;
