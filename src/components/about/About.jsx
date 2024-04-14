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
            className="h-[85vh] md:h-[50vh]"
          />
        </div>
        <div className="basis-3/5 flex text-center">
          <div className="self-center">
            <div className="text-[#525E85] text-6xl lg:text-5xl md:text-4xl font-bold mb-5 md:mb-4">
              Find Your Favorite Books Here
            </div>
            <div className="text-[#525E85] text-xl lg:text-lg md:text-base font-medium mb-5 md:mb-4">
              <strong className="text-2xl md:text-xl">
                au<span className="text-[#8fabff]">Libz </span>
              </strong>
              is the ultimate collection of books sourced from Google Books.
              Find inspiration, learn new things, and explore the world of
              literature effortlessly through this platform. Start your literary
              adventure now and discover your favorite books here!
            </div>
            <div className="flex text-[#525E85] justify-center">
              {booksData.map((item, index) => (
                <div
                  key={index}
                  className="mx-3 grid justify-items-center w-16"
                >
                  <div className="text-5xl md:text-4xl font-medium my-2">
                    {item.count}
                  </div>
                  <div className="text-xl md:text-base font-bold">
                    {item.saleAbility}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                to="/all-books"
                className="button-read mt-6 md:mt-5 bg-[#525E85] text-white w-[40%] md:w-[38%] py-1 md:py-0.5 rounded-full font-bold text-xl lg:text-lg md:text-base cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
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
            className="h-[85vh]  md:h-[50vh]"
          />
        </div>
      </div>
    </>
  );
}
export default About;
