import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BooksA from "./pages/BooksA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books-a" element={<BooksA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
