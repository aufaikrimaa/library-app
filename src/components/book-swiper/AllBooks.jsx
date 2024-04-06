import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/slice/books-slice";
import BookCard from "../book-card/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./book-swiper.css";
import LoadingBooks from "../loading-books/LoadingBooks";

function AllBooks({}) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks([]));
  }, []);

  let allBooks = [];

  Object.values(books).forEach((categoryBooks) => {
    allBooks = [...allBooks, ...categoryBooks];
  });

  // console.log(allBooks);

  return (
    <>
      <div className="section">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={6}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="swiper-allBooks"
        >
          {allBooks && allBooks.length > 0 ? (
            <>
              {allBooks.map((item, index) => (
                <SwiperSlide key={index}>
                  <BookCard
                    key={index}
                    img={item.volumeInfo.imageLinks?.thumbnail}
                    title={item.volumeInfo.title}
                    id={item.id}
                  />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <SwiperSlide>
              <div className="flex">
                <LoadingBooks />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
}

export default AllBooks;
