import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../redux/slice/books-slice";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ButtonSaveBook from "../components/book-save/ButtonSaveBook";

function DetailBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bookDetail, status } = useSelector((state) => state.books);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    dispatch(getBookDetail(id));
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
    const isBookSaved = savedBooks.some((book) => book.id === id);
    setIsSaved(isBookSaved);
  }, [id]);

  // console.log(bookDetail);

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

  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="px-16 lg:px-6 pt-20 pb-8 flex">
          {bookDetail && bookDetail.volumeInfo ? (
            <>
              <div className="basis-2/3 text-[#525E85]">
                <div className="text-3xl font-bold mb-0.5">
                  {bookDetail.volumeInfo.title}
                </div>
                <div className="font-medium text-lg text-[#8fabff] mb-0.5">
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
                <div className="text-sm mb-3">
                  {bookDetail.volumeInfo.publishedDate
                    ? `${formatDate(bookDetail.volumeInfo.publishedDate)}`
                    : "eBook"}{" "}
                  - {bookDetail.volumeInfo.publisher}
                </div>
                <div className="text-base font-medium text-justify">
                  <div className="font-bold text-lg">About this book:</div>
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
                <div className="h-18 flex items-center font-bold text-lg">
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
                <div className="flex">
                  <div className="cursor-pointer button-read rounded-lg bg-[#525E85] text-white font-bold mr-2 hover:bg-white hover:text-[#525E85] border border-2 hover:border-[#525E85]">
                    {bookDetail.saleInfo.saleability === "FREE" ? (
                      <div
                        className="py-1 flex justify-center w-24"
                        onClick={() =>
                          buttonLink(bookDetail.accessInfo.pdf.downloadLink)
                        }
                      >
                        Download
                      </div>
                    ) : bookDetail.saleInfo.saleability === "FOR_SALE" ? (
                      <div
                        className="py-1 flex justify-center w-24 "
                        onClick={() => buttonLink(bookDetail.saleInfo.buyLink)}
                      >
                        Buy
                      </div>
                    ) : (
                      <div
                        className="py-1 flex justify-center w-24"
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
                    styleIcon={"h-3.5 self-center pr-0.5"}
                    styleButton={
                      "cursor-pointer button-read border border-2 rounded-lg border-[#525E85] font-bold w-24 flex justify-center py-1"
                    }
                  />
                </div>
              </div>
              <div className="basis-1/3 grid justify-items-center">
                {bookDetail.volumeInfo.imageLinks ? (
                  <img
                    src={bookDetail.volumeInfo.imageLinks?.thumbnail}
                    alt={bookDetail.title}
                    className="img-swipe h-[20rem]"
                  />
                ) : (
                  <div className="text-center  bg-gray-300 py-5 mx-6">
                    {bookDetail.title}
                  </div>
                )}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailBook;
