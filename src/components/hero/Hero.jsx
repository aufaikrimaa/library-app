import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksforSlides } from "../../redux/slice/books-slice";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./hero.css";

SwiperCore.use([Autoplay]);

function Hero() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooksforSlides());
  }, []);

  useEffect(() => {
    const swiper = new SwiperCore(".swiper-hero", {
      modules: [Autoplay],
      autoplay: { delay: 5000 },
      speed: 1000,
      grabCursor: true,
      loop: true,
    });

    // Cleanup Swiper instance on unmount
    return () => {
      swiper.destroy();
    };
  }, [books]);

  console.log(books);

  return (
    <>
      <div className="hero bg-[#EBEEF6] flex text-[#525E85]">
        <Swiper className="swiper-hero self-center">
          {books.map((item, index) => (
            <SwiperSlide key={index} className="hero-slide-photos flex pt-5">
              <div className="basis-1/2 flex justify-center pl-13">
                <div className="self-center">
                  <div className="text-5xl font-bold mb-4">
                    {item.volumeInfo.title}
                  </div>
                  <div className="text-xl font-medium mb-4">
                    {item.volumeInfo.subtitle ? (
                      <>{item.volumeInfo.subtitle}</>
                    ) : (
                      <> Book about {item.volumeInfo.title}</>
                    )}
                  </div>
                  <div className="button-read mt-6 bg-[#525E85] text-white w-[12rem] py-1  flex justify-center rounded-full font-bold text-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
                    Read now !
                  </div>
                </div>
              </div>
              <div className="basis-1/2 flex justify-center ">
                <div className="h-[30rem] flex">
                  <img
                    src={item.volumeInfo.imageLinks?.smallThumbnail}
                    alt={`image ${index}`}
                    className="img-swipe self-center h-[18rem]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default Hero;
