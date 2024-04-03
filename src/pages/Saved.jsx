import { Link } from "react-router-dom";
import SavedBookCard from "../components/book-save/SavedBookCard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Saved() {
  const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
  //   console.log(savedBooks);

  return (
    <>
      <Navbar />
      <div className="px-4">
        <div className="flex justify-center text-[#525E85] text-3xl font-bold pt-18 mb-5">
          Saved Books
        </div>
        <div className="flex flex-wrap justify-center mb-6">
          {savedBooks && savedBooks.length > 0 ? (
            <>
              {savedBooks.map((item, index) => (
                <SavedBookCard
                  key={index}
                  id={item.id}
                  book={item}
                  img={item.volumeInfo.imageLinks?.thumbnail}
                  title={item.volumeInfo.title}
                  author={item.volumeInfo.authors}
                />
              ))}
            </>
          ) : (
            <div className="h-[18rem] 2xl:h-[20rem] 3xl:h-[24rem] grid content-center">
              <div className="font-bold text-[#525E85] text-xl mb-1">
                You don't have any saved books.
              </div>
              <Link
                to="/all-books"
                className="button-read bg-[#525E85] flex justify-center text-white py-1 rounded-full font-bold text-xl lg:text-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              >
                Go find some books➡️
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Saved;
