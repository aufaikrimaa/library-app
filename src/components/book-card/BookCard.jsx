import { Link } from "react-router-dom";

function BookCard({ img, title, id }) {
  return (
    <>
      <Link to={`/book/${id}`}>
        <div className="h-[19rem] md:h-[16rem] md:w-[9rem] w-[14rem] pt-2 hover:bg-gray-200 cursor-pointer text-[#525E85]">
          <div className="h-[13rem] md:h-[11rem] flex justify-center items-center">
            {img ? (
              <img src={img} alt={title} className="self-center md:h-20" />
            ) : (
              <div className="text-center bg-gray-300 py-5 mx-6">{title}</div>
            )}
          </div>
          <div className="flex justify-center text-center">
            <p className="text-xs md:text-[10px] px-4 md:px-2 mt-0.5">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BookCard;
