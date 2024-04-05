function LoadingBookSlide() {
  return (
    <>
      <div className="animate-pulse flex px-16 py-24">
        <div className="basis-2/3 w-[70vw]">
          <div className="bg-slate-200 rounded h-6 mb-1"></div>
          <div className="bg-slate-200 rounded h-6 w-[45rem] mb-1"></div>
          <div className="bg-slate-200 rounded h-3 mb-1"></div>
          <div className="bg-slate-200 rounded h-3 w-[30rem] mb-16"></div>
          <div className="bg-slate-200 rounded h-6 w-[12rem] mb-1"></div>
        </div>
        <div className="basis-1/3 grid justify-items-center">
          <div className="h-[20rem] bg-slate-200 rounded-lg w-[14rem]"></div>
        </div>
      </div>
    </>
  );
}
export default LoadingBookSlide;
