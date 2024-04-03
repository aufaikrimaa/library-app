import { Link } from "react-router-dom";
import ButtonSaveBook from "./ButtonSaveBook";
import { useState, useEffect } from "react";

function SavedBookCard({ img, title, id, author, book, updateSavedBooks }) {
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
    const isBookSaved = savedBooks.some((book) => book.id === id);
    setIsSaved(isBookSaved);
  }, [id]);

  return (
    <>
      <div className=" hover:bg-gray-200">
        <div className=" w-[18rem] lg:w-[16rem] cursor-pointer flex m-4">
          <Link
            to={`/book/${id}`}
            className=" flex justify-center items-center pr-1"
          >
            {img ? (
              <img src={img} alt={title} className="self-center" />
            ) : (
              <div className="text-center  bg-gray-300 py-5 mx-6">{title}</div>
            )}
          </Link>
          <div className="w-[12rem] h-[12rem]  lg:w-[10rem] lg:h-[10rem] grid content-between">
            <Link to={`/book/${id}`} className="text-[#525E85]">
              <div className="text-base lg:text-sm font-bold mb-1 lg:mb-0">
                {title}
              </div>
              <div className="text-xs lg:text-[0.65rem]">
                {author ? (
                  <>
                    {author.length > 1 ? "Authors: " : "Author: "}
                    {author && author.join(", ")}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Link>
            <div className="text-[#525E85] text-sm lg:text-xs">
              <ButtonSaveBook
                bookDetail={book}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                updateSavedBooks={updateSavedBooks}
                styleIcon={"h-3 self-center pr-0.5"}
                styleButton={
                  "cursor-pointer button-read border border-2 lg:border-[1.5px] rounded-lg border-[#525E85] font-bold flex justify-center py-0.5"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedBookCard;
