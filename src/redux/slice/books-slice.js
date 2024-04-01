import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    bookDetail: {},
    selfLink: "",
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
    getBookDetailSuccess(state, action) {
      state.bookDetail = action.payload.data;
      state.status = action.payload.status;
    },
  },
});

export const getBooks = (categories) => {
  return async (dispatch) => {
    dispatch(setStatus("loading"));

    let allBooks = [];
    let startIndex = 0;
    const maxResults = 40;

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

export const getBookDetail = (id) => {
  // Menggunakan id sebagai parameter
  return async (dispatch) => {
    dispatch(setStatus("loading"));

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );

      dispatch(
        getBookDetailSuccess({ data: response.data, status: "success" })
      );
    } catch (error) {
      dispatch(setStatus("error"));
    }
  };
};

export const getBooksforSlides = () => {
  return async (dispatch) => {
    dispatch(setStatus("loading"));
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=language:id"
    );
    dispatch(getBookSuccess({ data: response.data.items, status: "success" }));
  };
};

export const getFreeBooks = () => {
  return async (dispatch) => {
    dispatch(setStatus("loading"));

    let freeBooks = [];
    let startIndex = 0;
    const maxResults = 40;

    while (startIndex < 200) {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=language:id&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const filteredFreeBooks = response.data.items.filter(
        (book) => book.saleInfo && book.saleInfo.saleability === "FREE"
      );

      freeBooks = [...freeBooks, ...filteredFreeBooks];
      startIndex += maxResults;
    }

    dispatch(getBookSuccess({ data: freeBooks, status: "success" }));
  };
};

export const { setStatus, getBookSuccess, getBookDetailSuccess } =
  bookSlice.actions;
export default bookSlice.reducer;
