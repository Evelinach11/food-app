import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
};

const defaultWords = [
  { originalWord: "hello", translateWord: "привіт" },
  { originalWord: "you", translateWord: "ти" },
  { originalWord: "your", translateWord: "твій" },
  { originalWord: "body", translateWord: "тіло" },
  { originalWord: "dance", translateWord: "танець" },
  { originalWord: "monkey", translateWord: "мавпа" },
  { originalWord: "banana", translateWord: "банан" },
  { originalWord: "juise", translateWord: "сік" },
  { originalWord: "apple", translateWord: "яблуко" },
  { originalWord: "laptop", translateWord: "ноутбук" },
  { originalWord: "milk", translateWord: "молоко" },
  { originalWord: "sun", translateWord: "сонце" },
  { originalWord: "silk", translateWord: "день" },
  { originalWord: "weed", translateWord: "трава" },
  { originalWord: "customer", translateWord: "замовник" },
  { originalWord: "salary", translateWord: "зарплата" },
];

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addToWords: (state, action) => {
      state.words.push(action.payload);
    },
    addDefaulWords: (state) => {
      state.words = state.words.concat(defaultWords);
    },
  },
});

export const { addToWords, addDefaulWords, words } = wordsSlice.actions;
export const selectWords = (state) => state.words.words;

export default wordsSlice.reducer;
