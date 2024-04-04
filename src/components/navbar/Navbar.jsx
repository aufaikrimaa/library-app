import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-books.svg";
import iconDowwn from "../../assets/images/icon-down.svg";
import saved from "../../assets/images/saved.svg";
import "./navbar.css";

function Navbar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(location.pathname);
  // const [countSave, setCountSave] = useState(null);

  const bookNav = [
    "Education & Knowledge",
    "Fiction",
    "Business & Economics",
    "Computers & Technology",
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

  const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
  const countSaved = savedBooks.length;

  return (
    <>
      <div
        ref={navbarRef}
        className="section navbar flex fixed z-20 cursor-pointer text-[#525E85] font-bold"
      >
        <div className=" flex basis-1/2 ">
          <Link to="/" className="logo flex">
            <img src={logo} alt="logo" className="h-6 self-center " />
            <div className="self-center pl-1 text-3xl mr-5 pb-1">
              au<span className="text-[#8fabff]">Libz</span>
            </div>
          </Link>
          <Link
            to="/"
            className={`menu mr-5 self-center  text-lg ${
              activeNav === "/" ? "active" : ""
            }`}
            onClick={() => handleNavChange("/")}
          >
            Home
          </Link>
          <div
            className={`menu mr-4 self-center flex  text-lg ${
              activeNav.includes("/books") ? "active" : ""
            }`}
            onClick={toggleDropdown}
          >
            Books
            <img
              src={iconDowwn}
              className="h-[10px] ml-0.5 mt-0.5 self-center"
            />
            <div
              className={`dropdown z-10 fixed ${isDropdownOpen ? "open" : ""}`}
            >
              {isDropdownOpen && (
                <div className="z-30 bg-white shadow-lg mt-5 w-[16rem] text-[#525E85]">
                  <div className="block px-4 py-2 font-bold border-b-2 text-base">
                    Category
                  </div>
                  {bookNav.map((nav, i) => (
                    <div key={i}>
                      <Link
                        to={`/books/${nav}`}
                        className="block px-4 py-2 hover:bg-gray-200 font-normal text-base"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          handleNavChange(`/books/${nav}`);
                        }}
                      >
                        {nav}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Link
            to="/all-books"
            className={`menu mr-5 self-center  text-lg ${
              activeNav === "/all-books" ? "active" : ""
            }`}
            onClick={() => handleNavChange("/all-books")}
          >
            All Books
          </Link>
        </div>
        <div className="flex basis-1/2 justify-end">
          <Link to="/saved" className="self-center grid">
            {countSaved ? (
              <div className="absolute justify-self-end rounded-full bg-[#525E85] w-3.5 h-3.5 text-white flex justify-center">
                <div className="self-center text-xs">{countSaved}</div>
              </div>
            ) : (
              <></>
            )}
            <img src={saved} alt="logo" className="mt-0.5 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
