import { Link } from "react-router-dom";
import BookSwiper from "../components/book-swiper/BookSwiper";
import AllBooks from "../components/book-swiper/AllBooks";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import {
  categoriesA,
  categoriesB,
  categoriesC,
  categoriesD,
  categoriesE,
  categoriesF,
} from "../components/book-category/categoryData";
import Footer from "../components/footer/Footer";

function Home() {
  const swiperData = [
    {
      title: "Education & Knowledge",
      category: categoriesA,
    },
    {
      title: "Fiction",
      category: categoriesB,
    },
    {
      title: "Business & Economics",
      category: categoriesC,
    },
    {
      title: "Computers & Technology",
      category: categoriesD,
    },
    {
      title: "Language & Linguistics",
      category: categoriesE,
    },
    {
      title: "Law & Legal Issues",
      category: categoriesF,
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="h-[60vh] lg:h-[70vh] md:h-[35vh] py-[3%] mt-2">
          <div className="flex justify-center text-[#525E85] text-3xl font-bold mb-4">
            200+ Books from Google
          </div>
          <AllBooks />
        </div>
        <About />

        {swiperData.map((item, index) => (
          <div
            key={index}
            className="h-[60vh] lg:h-[70vh] md:h-[35vh] py-[3%] mt-2 text-[#525E85]"
          >
            <div className="section flex justify-between mb-2">
              <div className="text-2xl md:text-xl font-bold">{item.title}</div>
              <div className="w-[12%] lg:w-[13%] md:w-[14%]">
                <Link
                  to={`/books/${item.title}`}
                  className="button-view bg-white py-0.5 border-2 border-[#c1cffa] hover:bg-[#c1cffa] flex justify-center rounded-full font-bold text-xl lg:text-lg md:text-sm cursor-pointer "
                >
                  view more➡️
                </Link>
              </div>
            </div>

            <BookSwiper categories={item.category} />
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
}

export default Home;
