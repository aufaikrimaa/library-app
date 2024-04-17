import { useParams } from "react-router-dom";
import BookGrid from "../components/book-grid/BookGrid";
import {
  categoriesA,
  categoriesB,
  categoriesC,
  categoriesD,
  categoriesE,
  categoriesF,
} from "../components/book-category/categoryData";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function CategoryBooks() {
  const { category } = useParams();

  let selectedCategories = [];

  switch (category) {
    case "Education & Knowledge":
      selectedCategories = categoriesA;
      break;
    case "Fiction":
      selectedCategories = categoriesB;
      break;
    case "Business & Economics":
      selectedCategories = categoriesC;
      break;
    case "Computers & Technology":
      selectedCategories = categoriesD;
      break;
    case "Language & Linguistics":
      selectedCategories = categoriesE;
      break;
    case "Law & Legal Issues":
      selectedCategories = categoriesF;
      break;
    default:
      selectedCategories = "";
  }

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="flex justify-center text-[#525E85] text-3xl md:text-2xl sm:text-xl xs:text-xl font-bold mb-4 pt-18 sm:pt-10 xs:pt-10 mb-8 sm:mb-5 xs:mb-5">
          {category}
        </div>
      </div>
      <BookGrid categories={selectedCategories} />
      <Footer />
    </>
  );
}

export default CategoryBooks;
