import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "./slices/resultsSlice";
import wordsReducer from "./slices/wordsSlice";

export const store = configureStore({
  reducer: {
    result: resultsReducer,
    words: wordsReducer,
  },
});
