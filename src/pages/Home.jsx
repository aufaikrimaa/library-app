import BookSwiper from "../components/book-swiper/BookSwiper";
import AllBooks from "../components/book-swiper/AllBooks";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="h-[60vh] py-[3%] mt-2">
          <div className="flex justify-center text-[#525E85] text-3xl font-bold mb-4">
            150+ Book from Google
          </div>
          <AllBooks />
        </div>
      </div>
    </>
  );
}

export default Home;
