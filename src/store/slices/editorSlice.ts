import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToolsMode } from '@/constants';

interface IEditorState {
  id: number;
  input: string;
  output: {
    value: string;
    time: string | undefined;
    gcdnCache: string | undefined;
  };
  tools: {
    isOpen: boolean;
    mode: ToolsMode;
    variables: string;
    headers: string;
  };
}

interface IEditorTabsState {
  current: IEditorState;
  tabs: IEditorState[];
}

const initialEditor: IEditorState = {
  id: Date.now(),
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

const initialState: IEditorTabsState = {
  current: initialEditor,
  tabs: [],
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
      state.current.input = action.payload;
    },

    setOutputValues(state, action: PayloadAction<typeof initialState.current.output>) {
      state.current.output = action.payload;
    },

    setVariables(state, action: PayloadAction<string>) {
      state.current.tools.variables = action.payload;
    },

    setHeaders(state, action: PayloadAction<string>) {
      state.current.tools.headers = action.payload;
    },

    setToolsIsOpen(state, action: PayloadAction<boolean>) {
      state.current.tools.isOpen = action.payload;
    },

    setToolsMode(state, action: PayloadAction<ToolsMode>) {
      state.current.tools.mode = action.payload;
    },

    addNewTab(state) {
      const newTab = { ...initialEditor, id: Date.now() };

      if (state.tabs.length === 0) {
        state.tabs = [state.current, newTab];
        state.current = newTab;
      } else {
        state.tabs = [...state.tabs.slice(0, -1), state.current, newTab];
        state.current = newTab;
      }
    },

    removeTab(state, action: PayloadAction<number>) {
      state.tabs = state.tabs.filter((tab) => tab.id !== action.payload);

      if (state.current.id === action.payload) {
        state.current = state.tabs.at(-1) as IEditorState;
      }

      if (state.tabs.length < 2) {
        state.tabs = [];
      }
    },

    setCurrentTab(state, action: PayloadAction<number>) {
      state.current = state.tabs.find((tab) => tab.id === action.payload) as IEditorState;
    },

    saveCurrentTab(state) {
      state.tabs = state.tabs.map((tab) => {
        if (state.current.id === tab.id) {
          return { ...state.current };
        }

        return tab;
      }) as IEditorState[];
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
  addNewTab,
  removeTab,
  setCurrentTab,
  saveCurrentTab,
} = editorSlice.actions;
