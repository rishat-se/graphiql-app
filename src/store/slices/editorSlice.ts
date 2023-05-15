import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToolsMode } from '@/constants';

interface IEditorState {
  reqValue: string;
  resValue: string;
  tools: {
    isOpen: boolean;
    mode: ToolsMode;
    variables: string;
    headers: string;
  };
}

const initialState: IEditorState = {
  reqValue: '',
  resValue: '',
  tools: {
    isOpen: false,
    mode: ToolsMode.Variables,
    variables: '',
    headers: '',
  },
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setReqValue(state, action: PayloadAction<string>) {
      state.reqValue = action.payload;
    },

    setResValue(state, action: PayloadAction<string>) {
      state.resValue = action.payload;
    },

    setVariables(state, action: PayloadAction<string>) {
      state.tools.variables = action.payload;
    },

    setHeaders(state, action: PayloadAction<string>) {
      state.tools.headers = action.payload;
    },

    setToolsIsOpen(state, action: PayloadAction<boolean>) {
      state.tools.isOpen = action.payload;
    },

    setToolsMode(state, action: PayloadAction<ToolsMode>) {
      state.tools.mode = action.payload;
    },
  },
});

export const { setVariables, setHeaders, setReqValue, setToolsIsOpen, setToolsMode, setResValue } =
  editorSlice.actions;
