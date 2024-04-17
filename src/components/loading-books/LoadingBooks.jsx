function LoadingBooks() {
  const items = Array.from({ length: 50 }, (_, i) => i);
  return (
    <>
      {items.map((item) => (
        <div
          key={item}
          className="px-4 sm:px-2 xs:px-2 pb-4 pt-2 animate-pulse"
        >
          <div className="rounded-lg bg-slate-200 h-24 w-20 md:h-20 md:w-16 sm:h-14 xs:h-14 sm:w-10 xs:w-10"></div>
          <div className="h-2 bg-slate-200 rounded w-20 md:w-16 sm:w-10 xs:w-10 mt-2"></div>
          <div className="h-2 bg-slate-200 rounded w-18 md:w-11 sm:w-8 xs:w-8 mt-2 mx-2 sm:mx-1 xs:mx-1"></div>
        </div>
      ))}
    </>
  );
}
export default LoadingBooks;
