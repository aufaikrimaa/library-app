import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
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
      state.books = {
        ...state.books,
        [categories.join(",")]: data,
      };
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
  },
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const GBooksAPI = "https://www.googleapis.com/books/v1/volumes";

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

    while (startIndex < 80) {
      const response = await axios.get(
        `${GBooksAPI}?q=education+knowledge&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const eduBooksItem = response.data.items.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.thumbnail
          ? item.volumeInfo.imageLinks.thumbnail.replace("http://", "https://")
          : null;

        return {
          ...item,
          volumeInfo: {
            ...item.volumeInfo,
            imageLinks: {
              ...item.volumeInfo.imageLinks,
              thumbnail,
            },
            categories: ["Education", "Knowledge"],
          },
        };
      });

      allBooks = [...allBooks, ...eduBooksItem];
      await delay(1000);
      startIndex += maxResults;
    }

    startIndex = 0;

    while (startIndex < 80) {
      const response = await axios.get(
        `${GBooksAPI}?q=harry+potter+fiction+Magic+Mystery&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const filteredBooks = response.data.items.filter(
        (book) => book.volumeInfo.imageLinks
      );

      const fictionBooksItem = filteredBooks.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.thumbnail
          ? item.volumeInfo.imageLinks.thumbnail.replace("http://", "https://")
          : null;

        return {
          ...item,
          volumeInfo: {
            ...item.volumeInfo,
            imageLinks: {
              ...item.volumeInfo.imageLinks,
              thumbnail,
            },
            categories: ["Fiction", "Magic"],
          },
        };
      });

      allBooks = [...allBooks, ...fictionBooksItem];
      await delay(1000);
      startIndex += maxResults;
    }

    startIndex = 0;

    while (startIndex < 100) {
      const response = await axios.get(
        `${GBooksAPI}?q=language:id&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const booksItem = response.data.items.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.thumbnail
          ? item.volumeInfo.imageLinks.thumbnail.replace("http://", "https://")
          : null;

        return {
          ...item,
          volumeInfo: {
            ...item.volumeInfo,
            imageLinks: {
              ...item.volumeInfo.imageLinks,
              thumbnail,
            },
          },
        };
      });

      allBooks = [...allBooks, ...booksItem];
      await delay(1000);
      startIndex += maxResults;
    }

    const filteredBooksCategory = allBooks.filter(
      (book) =>
        book.volumeInfo.categories &&
        categories.some((category) =>
          book.volumeInfo.categories.includes(category)
        )
    );

    dispatch(
      getBookSuccess({
        data: filteredBooksCategory,
        categories,
        status: "success",
      })
    );
  };
};

export const getBookDetail = (id) => {
  return async (dispatch) => {
    dispatch(setStatus("loading"));

    try {
      const response = await axios.get(`${GBooksAPI}/${id}`);

      const item = response.data;
      const thumbnail = item.volumeInfo.imageLinks?.thumbnail
        ? item.volumeInfo.imageLinks.thumbnail.replace("http://", "https://")
        : null;

      const updatedBook = {
        ...item,
        volumeInfo: {
          ...item.volumeInfo,
          imageLinks: {
            ...item.volumeInfo.imageLinks,
            thumbnail,
          },
        },
      };

      dispatch(getBookDetailSuccess({ data: updatedBook, status: "success" }));
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
    const maxResults = 10;

    while (startIndex < 10) {
      const response = await axios.get(
        `${GBooksAPI}?q=fiction+Magic+Mystery&startIndex=${startIndex}&maxResults=${maxResults}`
      );

      const filteredBooks = response.data.items.filter(
        (book) => book.volumeInfo.imageLinks && book.volumeInfo.subtitle
      );

      const slidesBooksItem = filteredBooks.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.thumbnail
          ? item.volumeInfo.imageLinks.thumbnail.replace("http://", "https://")
          : null;

        return {
          ...item,
          volumeInfo: {
            ...item.volumeInfo,
            imageLinks: {
              ...item.volumeInfo.imageLinks,
              thumbnail,
            },
          },
        };
      });

      bookSlide = [...bookSlide, ...slidesBooksItem];
      startIndex += maxResults;

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    dispatch(getBookSlide({ data: bookSlide, status: "success" }));
  };
};

export const { setStatus, getBookSuccess, getBookDetailSuccess, getBookSlide } =
  bookSlice.actions;
export default bookSlice.reducer;
