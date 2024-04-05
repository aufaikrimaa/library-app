import { Link } from "react-router-dom";

function BookCard({ img, title, id }) {
  return (
    <>
      <Link to={`/book/${id}`}>
        <div className="h-[19rem] w-[14rem] pt-2 hover:bg-gray-200 cursor-pointer text-[#525E85]">
          <div className="h-[13rem] flex justify-center items-center">
            {img ? (
              <img src={img} alt={title} className="self-center" />
            ) : (
              <div className="text-center bg-gray-300 py-5 mx-6">{title}</div>
            )}
          </div>
          <div className="flex justify-center text-center">
            <p className="text-xs px-4 mt-0.5">{title}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BookCard;
