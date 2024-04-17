function LoadingDetailBook() {
  return (
    <>
      <div className="animate-pulse flex sm:grid xs:grid">
        <div className="basis-2/3 w-[70vw]">
          <div className="bg-slate-200 rounded h-4 mb-1"></div>
          <div className="bg-slate-200 rounded h-3 w-[30rem] sm:w-full xs:w-full mb-1"></div>
          <div className="flex mb-3">
            <div className="bg-slate-200 rounded h-1 w-16 mr-2"></div>
            <div className="bg-slate-200 rounded h-1 w-16"></div>
          </div>
          <div className="bg-slate-200 rounded h-3 mb-1 w-20"></div>
          <div className="bg-slate-200 rounded h-2 mb-1"></div>
          <div className="bg-slate-200 rounded h-2 mb-1"></div>
          <div className="bg-slate-200 rounded h-2 mb-1"></div>
          <div className="bg-slate-200 rounded h-2 mb-1"></div>
          <div className="bg-slate-200 rounded h-2 mb-1"></div>
          <div className="bg-slate-200 rounded h-2 mb-1"></div>
          <div className="h-12 flex items-center">
            <div className="bg-slate-200 rounded h-2 w-6 mr-2"></div>
            <div className="bg-slate-200 rounded h-2 w-6 mr-2"></div>
            <div className="bg-slate-200 rounded h-2 w-6"></div>
          </div>
          <div className="flex">
            <div className="bg-slate-200 rounded h-5 w-24 mr-2"></div>
            <div className="bg-slate-200 rounded h-5 w-24"></div>
          </div>
        </div>
        <div className="basis-1/3 grid justify-items-center">
          <div className="h-[20rem] md:h-[16rem] bg-slate-200 rounded-lg w-[14rem] md:w-[10rem] sm:mt-4 xs:mt-4 sm:w-full xs:w-full"></div>
        </div>
      </div>
    </>
  );
}
export default LoadingDetailBook;
