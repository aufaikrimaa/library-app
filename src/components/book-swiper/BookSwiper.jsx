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

function BookSwiper({ categories }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks(categories));
  }, [categories, dispatch]);

  //   console.log(books);

  return (
    <>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={6}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="swiper-books"
      >
        {books.map((item, index) => (
          <SwiperSlide key={index}>
            <BookCard
              key={index}
              img={item.volumeInfo.imageLinks?.thumbnail}
              title={item.volumeInfo.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BookSwiper;
