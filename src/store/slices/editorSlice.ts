import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IEditorState {
  reqValue: string;
  variables: string;
  headers: string;
}

// interface IEditorTabsState {
//   tabs: IEditorState[];
// }

const initialState: IEditorState = {
  reqValue: '',
  variables: '',
  headers: '',
  // tabs: [
  //   {
  //     reqValue: '',
  //     variables: '',
  //     headers: '',
  //   },
  // ],
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

    setReqValue(state, action: PayloadAction<string>) {
      state.reqValue = action.payload;
    },

    // addTab(state) {
    //   const { reqValue, variables, headers } = state;

    //   state.tabs.push({ reqValue, variables, headers });

    //   state.reqValue = '';
    //   state.variables = '';
    //   state.headers = '';
    // },
  },
});

export const { setVariables, setHeaders, setReqValue } = editorSlice.actions;
