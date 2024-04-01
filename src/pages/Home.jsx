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
} from "../components/book-category/categoryData";
import Footer from "../components/footer/Footer";

function Home() {
  const swiperData = [
    {
      title: "Business & Economics",
      category: categoriesA,
    },
    {
      title: "Computers & Technology",
      category: categoriesB,
    },
    {
      title: "Education & Knowledge",
      category: categoriesC,
    },
    {
      title: "Language, Linguistics & Arts",
      category: categoriesD,
    },
    {
      title: "Law & Legal Issues",
      category: categoriesE,
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="h-[60vh] lg:h-[70vh] py-[3%] mt-2">
          <div className="flex justify-center text-[#525E85] text-3xl font-bold mb-4">
            150+ Books from Google
          </div>
          <AllBooks />
        </div>
        <About />
        {swiperData.map((item, index) => (
          <div
            key={index}
            className="h-[60vh] lg:h-[70vh] py-[3%] mt-2 text-[#525E85]"
          >
            <div className="section flex justify-between">
              <div className="text-2xl font-bold mt-4 mb-2">{item.title}</div>
              <div className=" w-[12%] lg:w-[14%]">
                <Link
                  to="/all-books"
                  className="button-view bg-white py-0.5 border-2 border-[#c1cffa] hover:bg-[#c1cffa] flex justify-center rounded-full font-bold text-xl cursor-pointer "
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
