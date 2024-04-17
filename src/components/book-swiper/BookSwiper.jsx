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

function BookSwiper({ categories }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks(categories));
  }, [categories, dispatch]);

  const categoryKey = categories.join(",");

  // console.log(books);

  return (
    <>
      <div className="section">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          navigation={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 5,
            },
            560: {
              slidesPerView: 6,
            },
          }}
          className="swiper-books"
        >
          {books && books[categoryKey] && books[categoryKey].length > 0 ? (
            <>
              {books[categoryKey].map((item, index) => (
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

export default BookSwiper;
