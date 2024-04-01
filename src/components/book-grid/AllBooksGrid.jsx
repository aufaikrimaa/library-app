import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../redux/slice/books-slice";
import BookCard from "../book-card/BookCard";

function AllBooksGrid() {
  const dispatch = useDispatch();
  const { allBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {allBooks && allBooks.length > 0 ? (
          <>
            {allBooks.map((item, index) => (
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

export default AllBooksGrid;
