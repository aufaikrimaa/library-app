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
const GBooksAPI = import.meta.env.VITE_REACT_APP_API_URL;

const fetchBooksByQuery = async (
  query,
  startIndex,
  maxResults,
  categories = []
) => {
  const response = await axios.get(
    `${GBooksAPI}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`
  );

  const filteredBooks = response.data.items.filter(
    (book) => book.volumeInfo.imageLinks
  );

  const transformedBooks = filteredBooks.map((item) => {
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
        categories: item.volumeInfo.categories
          ? item.volumeInfo.categories
          : categories,
      },
    };
  });

  return transformedBooks;
};

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

    const fetchAndAppendBooks = async (query, categories = []) => {
      let allBooks = [];
      let startIndex = 0;
      const maxResults = 40;

      while (startIndex < 80) {
        const booksItem = await fetchBooksByQuery(
          query,
          startIndex,
          maxResults,
          categories
        );

        allBooks = [...allBooks, ...booksItem];
        await delay(1000);
        startIndex += maxResults;
      }

      return allBooks;
    };

    const eduBooks = await fetchAndAppendBooks("education+knowledge", [
      "Education",
      "Knowledge",
    ]);
    const fictionBooks = await fetchAndAppendBooks(
      "harry+potter+fiction+Magic+Mystery",
      ["Fiction", "Magic"]
    );
    const books = await fetchAndAppendBooks("language:id");

    const allBooks = [...eduBooks, ...fictionBooks, ...books];

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
      const slidesBooksItem = await fetchBooksByQuery(
        "fiction+Magic+Mystery",
        startIndex,
        maxResults
      );

      const filteredBooks = slidesBooksItem.filter(
        (book) => book.volumeInfo.imageLinks && book.volumeInfo.subtitle
      );

      bookSlide = [...bookSlide, ...filteredBooks];
      startIndex += maxResults;

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    dispatch(getBookSlide({ data: bookSlide, status: "success" }));
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

export const { setStatus, getBookSuccess, getBookDetailSuccess, getBookSlide } =
  bookSlice.actions;
export default bookSlice.reducer;
