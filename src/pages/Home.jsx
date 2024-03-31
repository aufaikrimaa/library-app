import BooksList from "../components/book-list/BooksList";
import BookSwiper from "../components/book-swiper/BookSwiper";
import { categoriesA } from "../components/book-category/categoryData";

function Home() {
  return (
    <>
      <div>
        <BookSwiper categories={categoriesA} />
      </div>
    </>
  );
}

export default Home;
