import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BooksA from "./pages/BooksA";
import DetailBook from "./pages/DetailBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books-a" element={<BooksA />} />
          <Route path="/book/:id" element={<DetailBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
