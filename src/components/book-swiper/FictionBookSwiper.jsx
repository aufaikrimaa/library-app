import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFictionBooks } from "../../redux/slice/books-slice";
import BookCard from "../book-card/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./book-swiper.css";
import LoadingBooks from "../loading-books/LoadingBooks";

function FictionBookSwiper() {
  const dispatch = useDispatch();
  const { fictionBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getFictionBooks());
  }, [dispatch]);

  return (
    <>
      <div className="section">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={6}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="swiper-books"
        >
          {fictionBooks && fictionBooks.length > 0 ? (
            <>
              {fictionBooks.map((item, index) => (
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

export default FictionBookSwiper;
