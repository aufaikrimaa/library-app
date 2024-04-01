import { useParams } from "react-router-dom";
import BookGrid from "../components/book-grid/BookGrid";
import {
  categoriesA,
  categoriesB,
  categoriesC,
  categoriesD,
  categoriesE,
} from "../components/book-category/categoryData";
import Navbar from "../components/navbar/Navbar";

function CategoryBooks() {
  const { category } = useParams();

  let selectedCategories = [];

  switch (category) {
    case "Business & Economics":
      selectedCategories = categoriesA;
      break;
    case "Computers & Technology":
      selectedCategories = categoriesB;
      break;
    case "Education & Knowledge":
      selectedCategories = categoriesC;
      break;
    case "Language, Linguistics & Arts":
      selectedCategories = categoriesD;
      break;
    case "Law & Legal Issues":
      selectedCategories = categoriesE;
      break;
    default:
      selectedCategories = categoriesA;
  }

  // console.log(selectedCategories);
  return (
    <>
      <Navbar />
      <div className="section">
        {category}
        <BookGrid categories={selectedCategories} />
      </div>
    </>
  );
}

export default CategoryBooks;
