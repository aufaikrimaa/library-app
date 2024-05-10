import { Link } from "react-router-dom";
import booksCaseLeft from "../../assets/images/books-case-left.png";
import booksCaseRight from "../../assets/images/books-case-right.png";

function About() {
  const booksData = [
    {
      saleAbility: "Free books",
      count: "107+",
    },
    {
      saleAbility: "For sale books",
      count: "51+",
    },
    {
      saleAbility: "Download-able books",
      count: "159+",
    },
  ];
  return (
    <>
      <div className="flex my-6 lg:my-10">
        <div className="basis-1/5  flex">
          <img
            src={booksCaseLeft}
            alt="books"
            className="h-[85vh] md:h-[50vh] xs:h-[45vh] sm:h-[45vh]"
          />
        </div>
        <div className="basis-3/5 flex text-center ">
          <div className="self-center">
            <div className="text-secondaryColor text-6xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl font-bold mb-5 md:mb-4 sm:mb-2 xs:mb-2">
              Find Your Favorite Books Here
            </div>
            <div className="text-secondaryColor text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs font-medium mb-5 md:mb-4 sm:mb-2 xs:mb-2">
              <strong className="text-2xl md:text-xl sm:text-lg xs:text-base">
                au<span className="text-tertiaryColor">Libz </span>
              </strong>
              is the ultimate collection of books sourced from Google Books.
              Find inspiration, learn new things, and explore the world of
              literature effortlessly through this platform. Start your literary
              adventure now and discover your favorite books here!
            </div>
            <div className="flex text-secondaryColor justify-center">
              {booksData.map((item, index) => (
                <div
                  key={index}
                  className="mx-3 grid justify-items-center w-16 xs:w-6 sm:w-8"
                >
                  <div className="text-5xl md:text-4xl sm:text-2xl xs:text-xl font-medium my-2">
                    {item.count}
                  </div>
                  <div className="text-xl md:text-base sm:text-sm xs:text-xs font-bold">
                    {item.saleAbility}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                to="/all-books"
                className="button-read mt-6 md:mt-5 xs:mt-3 sm:mt-4 text-white bg-secondaryColor w-[40%] md:w-[38%] xs:w-[65%] sm:w-[65%] py-1 md:py-0.5 rounded-full font-bold text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              >
                Go find some books➡️
              </Link>
            </div>
          </div>
        </div>
        <div className="basis-1/5 flex justify-end">
          <img
            src={booksCaseRight}
            alt="books"
            className="h-[85vh] md:h-[50vh] xs:h-[45vh] sm:h-[45vh]"
          />
        </div>
      </div>
    </>
  );
}
export default About;
