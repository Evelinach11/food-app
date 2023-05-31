import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

const resultsSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.result.push(action.payload);
    },
  },
});

export const { addResult } = resultsSlice.actions;
export const selectResult = (state) => state.result.result;
export const selectLastResult = (state) =>
  state.result.result[state.result.result.length - 1];

export default resultsSlice.reducer;
