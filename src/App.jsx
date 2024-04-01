import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailBook from "./pages/DetailBook";
import CategoryBooks from "./pages/CategoryBooks";
import AllBooksPage from "./pages/AllBooksPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<DetailBook />} />
          <Route path="/books/:category" element={<CategoryBooks />} />
          <Route path="/all-books" element={<AllBooksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
