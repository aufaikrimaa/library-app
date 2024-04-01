import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-books.svg";
import iconDowwn from "../../assets/images/icon-down.svg";
import "./navbar.css";

function Navbar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(location.pathname);

  const bookNav = [
    "Business & Economics",
    "Computers & Technology",
    "Education & Knowledge",
    "Language, Linguistics & Arts",
    "Law & Legal Issues",
  ];

  useEffect(() => {
    const shrinkNavbar = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navbarRef.current.classList.replace("navbar", "shrink");
      } else {
        navbarRef.current.classList.replace("shrink", "navbar");
      }
    };
    window.addEventListener("scroll", shrinkNavbar);
    return () => {
      window.removeEventListener("scroll", shrinkNavbar);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavChange = (menu) => {
    setActiveNav(menu);
  };

  return (
    <>
      <div
        ref={navbarRef}
        className="section navbar flex fixed z-20 cursor-pointer text-[#525E85] font-bold"
      >
        <div className="logo flex basis-1/4 ">
          <img src={logo} alt="logo" className="h-6 self-center " />
          <div className="self-center pl-2 text-3xl">
            au<span className="text-[#8fabff]">Libz</span>
          </div>
        </div>
        <div className="flex basis-3/4 justify-end text-xl">
          <Link
            to="/"
            className={`menu mr-5 self-center ${
              activeNav === "/" ? "active" : ""
            }`}
            onClick={() => handleNavChange("/")}
          >
            Home
          </Link>
          <div
            className={`menu mr-4 self-center flex ${
              activeNav.includes("/books") ? "active" : ""
            }`}
            onClick={toggleDropdown}
          >
            Books
            <img
              src={iconDowwn}
              className="h-[10px] ml-0.5 mt-0.5 self-center"
            />
          </div>
          <Link
            to="/saved"
            className={`menu mr-4 self-center ${
              activeNav === "/saved" ? "active" : ""
            }`}
            onClick={() => handleNavChange("/saved")}
          >
            Saved
          </Link>
        </div>
      </div>
      <div className="dropdown z-10 fixed ml-[82%]">
        {isDropdownOpen && (
          <ul className="z-30 bg-white shadow-lg mt-11 w-[16rem] mr-24 text-[#525E85]">
            <div className="block px-4 py-2 font-bold border-b-2">Category</div>
            <li>
              <Link
                to="/all-books"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                All Books
              </Link>
            </li>
            {bookNav.map((nav, i) => (
              <li key={i}>
                <Link
                  to={`/books/${nav}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    handleNavChange(`/books/${nav}`);
                  }}
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
