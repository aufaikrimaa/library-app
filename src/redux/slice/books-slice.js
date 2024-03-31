import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    status: "",
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    getBookSuccess(state, action) {
      state.books = action.payload.data;
      state.status = action.payload.status;
    },
  },
});

export const { setStatus, getBookSuccess } = bookSlice.actions;

export const getBooks = (categories) => {
  return async (dispatch) => {
    dispatch(setStatus("loading"));

    let allBooks = [];
    let startIndex = 0;
    const maxResults = 40; // Jumlah maksimum buku per permintaan

    while (startIndex < 200) {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=language:id&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const filteredBooks = response.data.items.filter(
        (book) =>
          book.volumeInfo.categories &&
          categories.some((category) =>
            book.volumeInfo.categories.includes(category)
          )
      );

      allBooks = [...allBooks, ...filteredBooks];
      startIndex += maxResults;
    }

    dispatch(getBookSuccess({ data: allBooks, status: "success" }));
  };
};

export default bookSlice.reducer;
