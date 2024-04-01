import logo from "../../assets/images/logo-books.svg";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer bg-[#EBEEF6] mt-4 py-4 text-[#525E85] font-bold">
        <div className="logo flex justify-center">
          <img src={logo} alt="logo" className="h-6 lg:h-[38px] self-center " />
          <div className="self-center pl-2 text-3xl lg:text-2xl">
            au<span className="text-[#8fabff]">Libz</span>
          </div>
        </div>
        <div className="ml-[10%] px-24 lg:px-20 py-5 flex text-xl lg:text-base">
          <div className="basis-1/3 grid gap-1">
            <div>Home</div>
            <div>Contact Us</div>
            <div>Term of Service</div>
            <div>About Us</div>
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
