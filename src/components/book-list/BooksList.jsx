import BookGrid from "../book-grid/BookGrid";
import {
  categoriesA,
  categoriesB,
  categoriesC,
  categoriesD,
  categoriesE,
} from "../book-category/categoryData";

function BooksList() {
  return (
    <>
      <BookGrid categories={categoriesE} />
    </>
  );
}

export default BooksList;
