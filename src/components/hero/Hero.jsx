import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooksforSlides } from "../../redux/slice/books-slice";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./hero.css";
import LoadingBookSlide from "../loading-books/LoadingBookSlideHero";

SwiperCore.use([Autoplay]);

function Hero() {
  const dispatch = useDispatch();
  const { bookSlide, status } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooksforSlides());
  }, []);

  useEffect(() => {
    const swiper = new SwiperCore(".swiper-hero", {
      modules: [Autoplay],
      autoplay: { delay: 5000 },
      speed: 1000,
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
    });

    // Cleanup Swiper instance on unmount
    return () => {
      swiper.destroy();
    };
  }, [bookSlide]);

  // console.log(bookSlide);

  return (
    <>
      <div className="hero bg-[#EBEEF6] flex text-[#525E85]">
        {status === "loading" ? (
          <LoadingBookSlide />
        ) : (
          <Swiper className="swiper-hero self-center mt-10 xs:mt-6 sm:mt-6 md:mt-8">
            {bookSlide.map((item, index) => (
              <SwiperSlide key={index} className="hero-slide-photos flex">
                <div className="basis-2/3 flex pl-14 sm:pl-5 xs:pl-4">
                  <div className="self-center">
                    <div className="text-5xl md:text-4xl sm:text-2xl xs:text-2xl font-bold mb-4 xs:mb-2 leading-[3.4rem]">
                      {item.volumeInfo.title}
                    </div>
                    <div className="text-xl md:text-base sm:text-xs xs:text-xs font-medium mb-4 xs:mb-2">
                      {item.volumeInfo.subtitle ? (
                        <>{item.volumeInfo.subtitle}</>
                      ) : (
                        <> Book about {item.volumeInfo.title}</>
                      )}
                    </div>
                    <Link
                      to={`/book/${item.id}`}
                      className="button-read mt-6 xs:mt-3 bg-[#525E85] text-white w-[12rem] md:w-[9rem] sm:w-[7rem] xs:w-[6rem] py-1 md:py-0.5 flex justify-center rounded-full font-bold text-xl md:text-base sm:text-sm xs:text-xs cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                    >
                      Read now !
                    </Link>
                  </div>
                </div>
                <div className="basis-1/3 flex pl-8 sm:pl-2 xs:pl-2">
                  <div className="h-[30rem] flex">
                    <img
                      src={item.volumeInfo.imageLinks?.thumbnail}
                      alt={`image ${index}`}
                      className="img-swipe self-center h-[18rem] md:h-[15rem] sm:h-[10rem] xs:h-[8rem]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}
export default Hero;
