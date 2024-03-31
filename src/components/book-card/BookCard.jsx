function BookCard({ img, title }) {
  return (
    <>
      <div className="h-[19rem] w-[14rem] pt-2 hover:bg-gray-200">
        {img ? (
          <div className="h-[13rem] flex justify-center ">
            <img src={img} alt={title} className="self-center" />
          </div>
        ) : (
          <div className="h-[13rem] flex justify-center items-center">
            <div className="text-center  bg-gray-300 py-5 mx-6">{title}</div>
          </div>
        )}
        <div className="flex justify-center text-center">
          <p className="text-xs px-4 mt-0.5">{title}</p>
        </div>
      </div>
    </>
  );
}

export default BookCard;
