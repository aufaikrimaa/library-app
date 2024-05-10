import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../redux/slice/books-slice";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ButtonSaveBook from "../components/book-save/ButtonSaveBook";
import LoadingDetailBook from "../components/loading-books/LoadingDetailBook";

function DetailBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bookDetail, status } = useSelector((state) => state.books);
  const [isSaved, setIsSaved] = useState(false);
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    dispatch(getBookDetail(id));
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
    const isBookSaved = savedBooks.some((book) => book.id === id);
    setIsSaved(isBookSaved);
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const formattedAmount = (amount) => {
    return amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const buttonLink = (link) => {
    return window.open(link, "_blank");
  };

  const updateSavedBooks = (updatedBooks) => {
    setSavedBooks(updatedBooks);
  };

  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="px-16 lg:px-6 md:px-2 sm:px-1 xs:px-1 pt-20 md:pt-18 sm:pt-10 xs:pt-10 pb-8 flex sm:grid xs:grid">
          {status === "loading" ? (
            <>
              <LoadingDetailBook />
            </>
          ) : (
            <>
              {bookDetail && bookDetail.volumeInfo ? (
                <>
                  <div className="basis-2/3 text-secondaryColor">
                    <div className="flex">
                      <div className="hidden sm:block xs:block mr-4 mb-4">
                        {bookDetail.volumeInfo.imageLinks ? (
                          <img
                            src={bookDetail.volumeInfo.imageLinks?.thumbnail}
                            alt={bookDetail.title}
                            className="img-swipe w-[40vw] "
                          />
                        ) : (
                          <div className="text-center  bg-gray-300 py-5 mx-6">
                            {bookDetail.title}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-3xl xs:text-xl font-bold mb-0.5">
                          {bookDetail.volumeInfo.title}
                        </div>
                        <div className="font-medium text-lg xs:text-sm md:text-base text-tertiaryColor mb-0.5">
                          {bookDetail.volumeInfo.authors ? (
                            <>
                              {bookDetail.volumeInfo.authors.length > 1
                                ? "Authors: "
                                : "Author: "}
                              {bookDetail.volumeInfo.authors &&
                                bookDetail.volumeInfo.authors.join(", ")}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="text-sm md:text-xs xs:text-xs mb-3">
                          {bookDetail.volumeInfo.publishedDate
                            ? `${formatDate(
                                bookDetail.volumeInfo.publishedDate
                              )}`
                            : "eBook"}{" "}
                          - {bookDetail.volumeInfo.publisher}
                        </div>
                      </div>
                    </div>
                    <div className="text-base md:text-sm xs:text-sm font-medium text-justify">
                      <div className="font-bold text-lg md:text-base xs:text-base">
                        About this book:
                      </div>
                      {bookDetail.volumeInfo.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: bookDetail.volumeInfo.description,
                          }}
                        />
                      ) : (
                        <div>{bookDetail.volumeInfo.subtitle}</div>
                      )}
                    </div>
                    <div className="h-18 flex items-center font-bold text-lg md:text-base xs:text-sm">
                      <div className="px-2">
                        {bookDetail.saleInfo.saleability === "FREE"
                          ? "Free book"
                          : bookDetail.saleInfo.saleability === "FOR_SALE"
                          ? `${formattedAmount(
                              bookDetail.saleInfo.listPrice.amount
                            )} `
                          : "Not for sale"}
                      </div>
                      |
                      <div className="px-2">
                        {bookDetail.volumeInfo.language === "id"
                          ? " Indonesia"
                          : " English"}
                      </div>
                      |
                      <div className="px-2">
                        {bookDetail.volumeInfo.pageCount} pages
                      </div>
                    </div>
                    <div className="flex xs:grid">
                      <div className="cursor-pointer button-read rounded-lg bg-secondaryColor text-white font-bold mr-2 xs:mr-0 xs:mb-2 hover:bg-white hover:text-secondaryColor border border-2 hover:border-secondaryColor">
                        {bookDetail.saleInfo.saleability === "FREE" ? (
                          <div
                            className="py-1  md:py-[6px] flex justify-center w-24 xs:w-full md:text-sm "
                            onClick={() =>
                              buttonLink(bookDetail.accessInfo.pdf.downloadLink)
                            }
                          >
                            Download
                          </div>
                        ) : bookDetail.saleInfo.saleability === "FOR_SALE" ? (
                          <div
                            className="py-1 md:py-[6px] flex justify-center w-24 xs:w-full md:text-sm"
                            onClick={() =>
                              buttonLink(bookDetail.saleInfo.buyLink)
                            }
                          >
                            Buy
                          </div>
                        ) : (
                          <div
                            className="py-1  md:py-[6px] flex justify-center w-24 xs:w-full md:text-sm "
                            onClick={() =>
                              buttonLink(bookDetail.volumeInfo.infoLink)
                            }
                          >
                            Preview
                          </div>
                        )}
                      </div>
                      <ButtonSaveBook
                        bookDetail={bookDetail}
                        isSaved={isSaved}
                        setIsSaved={setIsSaved}
                        updateSavedBooks={updateSavedBooks}
                        styleIcon={"h-3.5 md:h-3 self-center pr-0.5"}
                        styleButton={
                          "cursor-pointer button-read border border-2 rounded-lg border-secondaryColor font-bold w-24 xs:w-full flex justify-center py-1  md:py-[6px] md:text-sm "
                        }
                      />
                    </div>
                  </div>
                  <div className="basis-1/3 grid justify-items-center sm:hidden xs:hidden">
                    {bookDetail.volumeInfo.imageLinks ? (
                      <img
                        src={bookDetail.volumeInfo.imageLinks?.thumbnail}
                        alt={bookDetail.title}
                        className="img-swipe h-[20rem] md:h-[16rem]"
                      />
                    ) : (
                      <div className="text-center  bg-gray-300 py-5 mx-6">
                        {bookDetail.title}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-secondaryColor font-bold">
                  Cannot found this book
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailBook;
