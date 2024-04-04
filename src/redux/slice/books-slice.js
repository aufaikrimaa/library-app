import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: {},
    allBooks: {},
    eduBooks: [],
    fictionBooks: [],
    bookSlide: [],
    bookDetail: {},
    status: "",
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    getBookSuccess(state, action) {
      const { data, categories } = action.payload;
      state.books[categories.join(",")] = data;
      state.status = action.payload.status;
    },
    getBookDetailSuccess(state, action) {
      state.bookDetail = action.payload.data;
      state.status = action.payload.status;
    },
    getBookSlide(state, action) {
      state.bookSlide = action.payload.data;
      state.status = action.payload.status;
    },
    getAllBookSuccess(state, action) {
      state.allBooks = action.payload.data;
      state.status = action.payload.status;
    },
    getEduBookSuccess(state, action) {
      state.eduBooks = action.payload.data;
      state.status = action.payload.status;
    },
    getFictionBookSuccess(state, action) {
      state.fictionBooks = action.payload.data;
      state.status = action.payload.status;
    },
  },
});

export const getBooks = (categories) => {
  return async (dispatch, getState) => {
    const cacheKey = categories.join(",");
    const cachedBooks = getState().books.books[cacheKey];

    if (cachedBooks) {
      dispatch(
        getBookSuccess({ data: cachedBooks, categories, status: "success" })
      );
      return;
    }

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

    dispatch(getBookSuccess({ data: allBooks, categories, status: "success" }));
  };
};

export const getBookDetail = (id) => {
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
  return async (dispatch, getState) => {
    const cachedBookSlide = getState().books.bookSlide;

    if (Object.keys(cachedBookSlide).length !== 0) {
      dispatch(getBookSlide({ data: cachedBookSlide, status: "success" }));
      return;
    }

    dispatch(setStatus("loading"));

    let bookSlide = [];
    let startIndex = 0;
    const maxResults = 40;

    while (startIndex < 80) {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter+fiction+Magic+Mystery&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const filteredBooks = response.data.items.filter(
        (book) => book.volumeInfo.imageLinks
      );

      bookSlide = [...bookSlide, ...filteredBooks];
      startIndex += maxResults;
    }

    dispatch(getBookSlide({ data: bookSlide, status: "success" }));
  };
};

export const getAllBooks = () => {
  return async (dispatch, getState) => {
    const cachedAllBooks = getState().books.allBooks;

    if (Object.keys(cachedAllBooks).length !== 0) {
      dispatch(getAllBookSuccess({ data: cachedAllBooks, status: "success" }));
      return;
    }

    dispatch(setStatus("loading"));

    let allBooks = [];
    let startIndex = 0;
    const maxResults = 40;

    while (startIndex < 100) {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=language:id&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const allBooksItem = response.data.items;

      allBooks = [...allBooks, ...allBooksItem];
      startIndex += maxResults;
    }

    dispatch(getAllBookSuccess({ data: allBooks, status: "success" }));
  };
};

export const getEduBooks = () => {
  return async (dispatch, getState) => {
    const cachedAllBooks = getState().books.eduBooks;

    if (Object.keys(cachedAllBooks).length !== 0) {
      dispatch(getAllBookSuccess({ data: cachedAllBooks, status: "success" }));
      return;
    }

    dispatch(setStatus("loading"));

    let eduBooks = [];
    let startIndex = 0;
    const maxResults = 40;

    while (startIndex < 80) {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=education+knowledge&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const eduBooksItem = response.data.items;

      eduBooks = [...eduBooks, ...eduBooksItem];
      startIndex += maxResults;
    }

    dispatch(getEduBookSuccess({ data: eduBooks, status: "success" }));
  };
};

export const getFictionBooks = () => {
  return async (dispatch, getState) => {
    const cachedAllBooks = getState().books.fictionBooks;

    if (Object.keys(cachedAllBooks).length !== 0) {
      dispatch(getAllBookSuccess({ data: cachedAllBooks, status: "success" }));
      return;
    }

    dispatch(setStatus("loading"));

    let fictionBooks = [];
    let startIndex = 0;
    const maxResults = 40;

    while (startIndex < 80) {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter+fiction+Magic+Mystery&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const filteredBooks = response.data.items.filter(
        (book) => book.volumeInfo.imageLinks
      );

      fictionBooks = [...fictionBooks, ...filteredBooks];
      startIndex += maxResults;
    }

    dispatch(getFictionBookSuccess({ data: fictionBooks, status: "success" }));
  };
};

export const {
  setStatus,
  getBookSuccess,
  getBookDetailSuccess,
  getBookSlide,
  getAllBookSuccess,
  getEduBookSuccess,
  getFictionBookSuccess,
} = bookSlice.actions;
export default bookSlice.reducer;
