import BookSwiper from "../components/book-swiper/BookSwiper";
import { categoriesA } from "../components/book-category/categoryData";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Home() {
  const bookNav = [
    "Business & Economics",
    "Computers & Technology",
    "Education & Knowledge",
    "Language, Linguistics & Arts",
    "Law & Legal Issues",
  ];
  return (
    <>
      <div>
        <Navbar />
        <BookSwiper categories={categoriesA} />
        <ul>
          {bookNav.map((nav, i) => (
            <li key={i}>
              <Link to={`/books/${nav}`}>{nav}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
