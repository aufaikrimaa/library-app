import BookGrid from "../components/book-grid/BookGrid";
import { categoriesA } from "../components/book-category/categoryData";

function BooksA() {
  return (
    <>
      <h1>Business & Economics</h1>
      <BookGrid categories={categoriesA} />
    </>
  );
}

export default BooksA;
