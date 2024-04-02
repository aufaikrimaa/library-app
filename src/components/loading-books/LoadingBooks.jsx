function LoadingBooks() {
  const items = Array.from({ length: 50 }, (_, i) => i);
  return (
    <>
      {items.map((item) => (
        <div key={item} className="px-4 pb-4 pt-2 animate-pulse">
          <div className="rounded-lg bg-slate-200 h-24 w-20"></div>
          <div className="h-2 bg-slate-200 rounded w-20 mt-2"></div>
          <div className="h-2 bg-slate-200 rounded w-18 mt-2 mx-2"></div>
        </div>
      ))}
    </>
  );
}
export default LoadingBooks;
