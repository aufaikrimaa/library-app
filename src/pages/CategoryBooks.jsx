import { useParams } from "react-router-dom";
import BookGrid from "../components/book-grid/BookGrid";
import {
  categoriesA,
  categoriesB,
  categoriesD,
  categoriesE,
} from "../components/book-category/categoryData";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import EduBookGrid from "../components/book-grid/EduBookGrid";
import FictionBookGrid from "../components/book-grid/FictionBookGrid";

function CategoryBooks() {
  const { category } = useParams();

  let selectedCategories = [];

  switch (category) {
    case "Education & Knowledge":
      selectedCategories = "";
      break;
    case "Fiction":
      selectedCategories = "";
      break;
    case "Business & Economics":
      selectedCategories = categoriesA;
      break;
    case "Computers & Technology":
      selectedCategories = categoriesB;
      break;
    case "Language & Linguistics":
      selectedCategories = categoriesD;
      break;
    case "Law & Legal Issues":
      selectedCategories = categoriesE;
      break;
    default:
      selectedCategories = categoriesA;
  }

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="flex justify-center text-[#525E85] text-3xl font-bold mb-4 pt-18 mb-8">
          {category}
        </div>
        {category === "Education & Knowledge" ? (
          <EduBookGrid />
        ) : category === "Fiction" ? (
          <FictionBookGrid />
        ) : (
          <BookGrid categories={selectedCategories} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default CategoryBooks;
