import { Link } from "react-router-dom";
import books from "../../assets/images/books.png";

function About() {
  return (
    <>
      <div className="section flex my-6 lg:my-10">
        <div className="basis-2/5 flex justify-center">
          <img src={books} alt="books" className="" />
        </div>
        <div className="basis-3/5 flex">
          <div className="self-center">
            <div className="text-[#525E85] text-8xl lg:text-7xl font-bold mb-2">
              Find Your Favorite Books Here
            </div>
            <div className="text-[#525E85] text-lg font-medium mb-2">
              auLibz is the ultimate collection of books sourced from Google
              Books. Find inspiration, learn new things, and explore the world
              of literature effortlessly through this platform. Start your
              literary adventure now and discover your favorite books here!
            </div>
            <Link
              to="/all-books"
              className="button-read mt-6 bg-[#525E85] text-white w-[40%] py-1  flex justify-center rounded-full font-bold text-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
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
