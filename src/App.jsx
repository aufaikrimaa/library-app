import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailBook from "./pages/DetailBook";
import CategoryBooks from "./pages/CategoryBooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<DetailBook />} />
          <Route path="/books/:category" element={<CategoryBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
