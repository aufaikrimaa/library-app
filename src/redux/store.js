import { configureStore } from "@reduxjs/toolkit";

import books from "./slice/books-slice";

const store = configureStore({
  reducer: {
    books,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
