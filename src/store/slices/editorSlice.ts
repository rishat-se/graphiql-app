import { createSlice } from '@reduxjs/toolkit';

interface IEditorInitialState {
  reqValue: string | null;
  variables: string | null;
  headers: string | null;
}

const initialState: IEditorInitialState = {
  reqValue: null,
  variables: null,
  headers: null,
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {},
});
