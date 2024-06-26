import { Link } from "react-router-dom";
import SavedBookCard from "../components/book-save/SavedBookCard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    const savedBook = JSON.parse(localStorage.getItem("savedBooks") || "[]");
    setSavedBooks(savedBook);
  }, []);

  const updateSavedBooks = (updatedBooks) => {
    setSavedBooks(updatedBooks);
  };

  return (
    <>
      <Navbar />
      <div className="px-4">
        {savedBooks && savedBooks.length > 0 ? (
          <>
            <div className="flex justify-center text-secondaryColor text-3xl md:text-2xl sm:text-2xl xs:text-2xl font-bold pt-18 sm:pt-10 xs:pt-10 mb-8 sm:mb-5 xs:mb-5">
              Saved Books
            </div>
            <div className="flex flex-wrap justify-center mb-8">
              {savedBooks.map((item, index) => (
                <SavedBookCard
                  key={index}
                  id={item.id}
                  book={item}
                  img={item.volumeInfo.imageLinks?.thumbnail}
                  title={item.volumeInfo.title}
                  author={item.volumeInfo.authors}
                  updateSavedBooks={updateSavedBooks}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center mb-8">
            <div className="h-[23.6rem] 2xl:h-[27.3rem] 3xl:h-[30.4rem] lg:h-[18.8rem] grid content-center pt-18">
              <div className="font-bold text-secondaryColor text-xl sm:text-lg xs:text-lg mb-1">
                You don't have any saved books.
              </div>
              <Link
                to="/all-books"
                className="button-read bg-secondaryColor flex justify-center text-white py-1 rounded-full font-bold text-xl lg:text-lg sm:text-base xs:text-base cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              >
                Go find some books➡️
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="sm:hidden xs:hidden">
        <Footer />
      </div>
    </>
  );
}
export default Saved;
