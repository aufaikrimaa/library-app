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

  const bookNav = [
    "Education & Knowledge",
    "Fiction",
    "Business & Economics",
    "Computers & Technology",
    "Language & Linguistics",
    "Law & Legal Issues",
  ];

  useEffect(() => {
    const shrinkNavbar = () => {
      const isNotMobile = window.innerWidth > 799;
      if (isNotMobile) {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          navbarRef.current.classList.replace("navbar", "shrink");
        } else {
          navbarRef.current.classList.replace("shrink", "navbar");
        }
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
        className="navbar flex fixed z-20 cursor-pointer text-secondaryColor font-bold xs:bg-white sm:bg-white sm:h-[3rem] xs:h-[3rem]"
      >
        <div className="flex basis-4/5 ">
          <Link
            to="/"
            className="logo flex pl-[3rem] xs:pl-[1rem] sm:pl-[1rem]"
          >
            <img
              src={logo}
              alt="logo"
              className="h-6 md:h-5 xs:h-4 sm:h-4 self-center"
            />
            <div className="self-center pl-1 text-3xl md:text-2xl xs:text-lg sm:text-xl mr-5 pb-1 sm:pb-0 xs:pb-0">
              au<span className="text-tertiaryColor">Libz</span>
            </div>
          </Link>
          <div className="navmenu flex sm:mt-[95vh] xs:mt-[95vh] xs:w-[100vw] sm:w-[100vw] xs:h-full sm:h-full xs:absolute sm:absolute xs:justify-center sm:justify-center xs:gap-8 sm:gap-18 xs:bg-white sm:bg-white">
            <Link
              to="/"
              className={`menu mr-5 self-center text-lg md:text-base xs:text-sm sm:text-sm ${
                activeNav === "/" ? "active" : ""
              }`}
              onClick={() => handleNavChange("/")}
            >
              Home
            </Link>
            <div
              className={`menu mr-4 self-center flex text-lg md:text-base xs:text-sm sm:text-sm ${
                activeNav.includes("/books") ? "active" : ""
              }`}
              onClick={toggleDropdown}
            >
              Books
              <img
                src={iconDowwn}
                className="h-[10px] md:h-[8px] xs:h-[6px] sm:h-[7px] ml-0.5 mt-0.5 self-center"
              />
              <div
                className={`dropdown z-10 fixed sm:absolute xs:absolute xs:bottom-full sm:bottom-full ${
                  isDropdownOpen ? "open" : ""
                }`}
              >
                {isDropdownOpen && (
                  <div className="z-30 bg-white shadow-lg mt-5 w-[16rem] text-secondaryColor">
                    <div className="block px-4 py-2 font-bold border-b-2 text-base md:text-sm xs:text-xs sm:text-xs">
                      Category
                    </div>
                    {bookNav.map((nav, i) => (
                      <div key={i}>
                        <Link
                          to={`/books/${nav}`}
                          className="block px-4 py-2 hover:bg-gray-200 font-normal text-base md:text-sm xs:text-xs sm:text-xs"
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
              className={`menu self-center  text-lg md:text-base xs:text-sm sm:text-sm ${
                activeNav === "/all-books" ? "active" : ""
              }`}
              onClick={() => handleNavChange("/all-books")}
            >
              All Books
            </Link>
          </div>
        </div>
        <div className="flex basis-1/5 justify-end">
          <Link
            to="/saved"
            className="self-center grid pr-[3rem] xs:pr-[1rem] sm:pr-[1rem]"
          >
            {countSaved ? (
              <div className="absolute justify-self-end rounded-full bg-secondaryColor w-3.5 h-3.5 md:w-2 md:h-2 sm:h-[10px] sm:w-[10px] xs:h-[10px] xs:w-[10px] text-white flex justify-center">
                <div className="self-center text-xs md:text-[8px] sm:text-[6px] xs:text-[6px]">
                  {countSaved}
                </div>
              </div>
            ) : (
              <></>
            )}
            <img
              src={saved}
              alt="logo"
              className="mt-0.5 md:mt-[2px] sm:mt-[3px] xs:mt-[3px] h-6 md:h-5 xs:h-4 sm:h-4"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
