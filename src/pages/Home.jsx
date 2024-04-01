import FreeBookSwiper from "../components/book-swiper/FreeBookSwiper";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="h-[60vh] py-[3%]">
          <div className="flex justify-center text-[#525E85] text-3xl font-bold mb-4">
            Free Books
          </div>
          <FreeBookSwiper />
        </div>
      </div>
    </>
  );
}

export default Home;
