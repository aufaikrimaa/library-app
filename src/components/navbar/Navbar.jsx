import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-books.svg";
import "./navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const bookNav = [
    "Business & Economics",
    "Computers & Technology",
    "Education & Knowledge",
    "Language, Linguistics & Arts",
    "Law & Legal Issues",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="navbar flex fixed justify-between z-20 bg-white py-2">
        <div className="logo flex">
          <img src={logo} alt="logo" className="h-6 self-center " />
          <div className="self-center pl-2 text-3xl font-bold">auLibz</div>
        </div>
        <div className="flex">
          <div className="self-center mr-2">Home</div>
          <div className="relative self-center mr-2">
            <div onClick={toggleDropdown}>Books</div>
            {isDropdownOpen && (
              <ul className="absolute z-10 bg-white shadow-lg mt-2 w-[24rem] mr-16">
                {bookNav.map((nav, i) => (
                  <li key={i}>
                    <Link
                      to={`/books/${nav}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {nav}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="self-center">Favorite</div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
