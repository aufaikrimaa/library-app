import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/slice/books-slice";
import BookCard from "../book-card/BookCard";

function BookGrid({ categories }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks(categories));
  }, [categories, dispatch]);

  const categoryKey = categories.join(",");

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {books && books[categoryKey] && books[categoryKey].length > 0 ? (
          <>
            {books[categoryKey].map((item, index) => (
              <BookCard
                key={index}
                img={item.volumeInfo.imageLinks?.thumbnail}
                title={item.volumeInfo.title}
                id={item.id}
              />
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default BookGrid;
