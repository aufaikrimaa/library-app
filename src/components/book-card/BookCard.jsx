import { Link } from "react-router-dom";

function BookCard({ img, title, id }) {
  return (
    <>
      <Link to={`/book/${id}`}>
        <div className="h-[19rem] md:h-[16rem] md:w-[9rem] w-[14rem] sm:h-[10rem] sm:w-[6rem] xs:h-[10rem] xs:w-[6rem] pt-2 hover:bg-gray-200 cursor-pointer text-[#525E85]">
          <div className="h-[13rem] md:h-[11rem] sm:h-[6rem] xs:h-[6rem] flex justify-center items-center">
            {img ? (
              <img
                src={img}
                alt={title}
                className="self-center md:h-20 sm:h-12 xs:h-10"
              />
            ) : (
              <div className="text-center bg-gray-300 py-5 mx-6">{title}</div>
            )}
          </div>
          <div className="flex justify-center text-center">
            <p className="text-xs md:text-[10px] sm:text-[8px] xs:text-[8px] px-4 md:px-2 sm:px-2 xs:px-3 mt-0.5 xs:leading-tight sm:leading-tight">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BookCard;
