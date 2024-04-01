import { Link } from "react-router-dom";
import books from "../../assets/images/books.png";

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
      saleAbility: "Downloadable books",
      count: "159+",
    },
  ];
  return (
    <>
      <div className="section flex my-6 lg:my-10">
        <div className="basis-2/5 flex justify-center">
          <img src={books} alt="books" className="" />
        </div>
        <div className="basis-3/5 flex lg:pl-4">
          <div className="self-center">
            <div className="text-[#525E85] text-7xl lg:text-6xl font-bold mb-2">
              Find Your Favorite
              <br /> Books Here
            </div>
            <div className="text-[#525E85] text-lg font-medium mb-2">
              <strong className="text-2xl">
                au<span className="text-[#8fabff]">Libz</span>
              </strong>{" "}
              is the ultimate collection of books sourced from Google Books.
              Find inspiration, learn new things, and explore the world of
              literature effortlessly through this platform. Start your literary
              adventure now and discover your favorite books here!
            </div>
            <div className="flex text-[#525E85]">
              {booksData.map((item, index) => (
                <div key={index} className="mr-6 grid justify-items-center">
                  <div className="text-6xl  lg:text-5xl font-medium">
                    {item.count}
                  </div>
                  <div className="text-xl font-bold">{item.saleAbility}</div>
                </div>
              ))}
            </div>
            <Link
              to="/all-books"
              className="button-read mt-4 bg-[#525E85] text-white w-[40%] py-1  flex justify-center rounded-full font-bold text-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            >
              Go find some books➡️
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
