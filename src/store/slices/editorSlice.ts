import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToolsMode } from '@/constants';

interface IEditorState {
  input: string;
  output: IEditorOutputState;
  tools: IEditorToolsState;
}

interface IEditorOutputState {
  value: string;
  time: string | undefined;
  gcdnCache: string | undefined;
}

interface IEditorToolsState {
  isOpen: boolean;
  mode: ToolsMode;
  variables: string;
  headers: string;
}

const initialState: IEditorState = {
  input: '',
  output: {
    value: '',
    time: undefined,
    gcdnCache: undefined,
  },
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
    setInputValue(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },

    setOutputValues(state, action: PayloadAction<IEditorOutputState>) {
      state.output = action.payload;
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

export const {
  setVariables,
  setHeaders,
  setInputValue,
  setToolsIsOpen,
  setToolsMode,
  setOutputValues,
} = editorSlice.actions;
