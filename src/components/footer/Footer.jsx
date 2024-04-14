import logo from "../../assets/images/logo-books.svg";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer bg-[#EBEEF6] mt-4 md:mt-6 py-4 text-[#525E85] font-bold h-[40vh] md:h-[20vh]">
        <div className="logo flex justify-center">
          <img
            src={logo}
            alt="logo"
            className="h-6 lg:h-[38px] md:h-5 self-center "
          />
          <div className="self-center pl-2 text-3xl lg:text-2xl md:text-xl">
            au<span className="text-[#8fabff]">Libz</span>
          </div>
        </div>
        <div className="ml-[10%] px-24 md:px-18 lg:px-20 py-5 flex text-xl lg:text-base md:text-sm">
          <div className="basis-1/3 grid gap-1">
            <div>Home</div>
            <div>Contact us</div>
            <div>Term of Service</div>
            <div>About us</div>
          </div>
          <div className="basis-1/3 grid gap-1">
            <div>Live</div>
            <div>FaQ</div>
            <div>Premium</div>
            <div>Privacy Policy</div>
          </div>
          <div className="basis-1/3 grid gap-1">
            <div>Free Books</div>
            <div>Recomended Books</div>
            <div>Documentation</div>
            <div>All Books</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
