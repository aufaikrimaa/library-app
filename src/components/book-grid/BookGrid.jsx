import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/slice/books-slice";
import BookCard from "../book-card/BookCard";
import searchIcon from "../../assets/images/search.svg";
import LoadingBooks from "../loading-books/LoadingBooks";

function BookGrid({ categories }) {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getBooks(categories));
  }, [categories, dispatch]);

  const categoryKey = categories.join(",");

  const filteredBooks = books?.[categoryKey]?.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex mb-6 ml-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search books..."
            className="px-3 py-1 rounded-full w-[30rem] border border-gray-500 focus:border-[#525E85] focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {status === "loading" ? (
          <LoadingBooks />
        ) : (
          <>
            {filteredBooks && filteredBooks.length > 0 ? (
              <>
                {filteredBooks.map((item, index) => (
                  <BookCard
                    key={index}
                    img={item.volumeInfo.imageLinks?.thumbnail}
                    title={item.volumeInfo.title}
                    id={item.id}
                  />
                ))}
              </>
            ) : (
              <div className="h-[30vh] flex">
                <p className="self-center font-bold text-[#525E85]">
                  No books found.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default BookGrid;
