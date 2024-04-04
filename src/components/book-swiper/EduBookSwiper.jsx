import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEduBooks } from "../../redux/slice/books-slice";
import BookCard from "../book-card/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./book-swiper.css";
import LoadingBooks from "../loading-books/LoadingBooks";

function EduBookSwiper() {
  const dispatch = useDispatch();
  const { eduBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getEduBooks());
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
          {eduBooks && eduBooks.length > 0 ? (
            <>
              {eduBooks.map((item, index) => (
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

export default EduBookSwiper;
