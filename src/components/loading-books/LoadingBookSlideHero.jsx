function LoadingBookSlide() {
  return (
    <>
      <div className="animate-pulse flex px-16 sm:px-4 xs:px-2 py-24 md:py-20 sm:py-16 xs:py-18">
        <div className="basis-2/3 w-[70vw]">
          <div className="bg-slate-300 rounded h-6 md:h-4 sm:h-2 xs:h-2 mb-1"></div>
          <div className="bg-slate-300 rounded h-6 md:h-4 sm:h-2 xs:h-2 w-[45rem] md:w-[16rem] sm:w-[12rem] xs:w-[10rem] mb-1"></div>
          <div className="bg-slate-300 rounded h-3 mb-1"></div>
          <div className="bg-slate-300 rounded h-3 w-[30rem]  md:w-[16rem] sm:w-[8rem] xs:w-[6rem] mb-16 md:mb-8 sm:mb-6 xs:mb-6"></div>
          <div className="bg-slate-300 rounded h-6 sm:h-2 xs:h-2 w-[12rem] md:w-[8rem] sm:w-[6rem] xs:w-[4rem] mb-1"></div>
        </div>
        <div className="basis-1/3 grid justify-items-center">
          <div className="h-[20rem] md:h-[14rem] sm:h-[10rem] xs:h-[8rem] bg-slate-300 rounded-lg w-[14rem] md:w-[10rem] sm:w-[7rem] xs:w-[6rem]"></div>
        </div>
      </div>
    </>
  );
}
export default LoadingBookSlide;
