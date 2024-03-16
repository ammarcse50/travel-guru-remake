import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../../public/rectangle1.png";
import img2 from "../../../../public/Sajek.png";
import img3 from "../../../../public/Sreemongol.png";
import img4 from "../../../../public/sundorbon.png";
import img5 from "../../../../public/Rectangle 26.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${img1})` }}
    >
       
      <div className="hero-overlay bg-opacity-60"></div>
       
      <div className="w-1/2  ml-80">
        <div className="-ml-96 text-left">
          <h1 className="mb-5 text-5xl font-bold">COX'S BAZAR</h1>
          <p className="mb-5 text-left">
            Cox's Bazar is a city, fishing port, tourism centre and district{" "}
            <br />
            headquarters in southeastern Bangladesh. It is famous mostly for{" "}
            <br />
            its long natural sandy beach, and it ...
          </p>
          <button className="btn btn-primary">
            Booking <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="ml-[700px] mt-56">
        <div className="carousel w-full gap-7">
          <div id="slide1" className="carousel-item relative  ">
            <img src={img2} className="w-[270px] h-[416px] hover:border-8   border-yellow-500 rounded-3xl " />
          
          </div>
          <div id="slide2" className="carousel-item relative">
            <img src={img3} className="w-[270px] h-[416px] hover:border-8   border-yellow-500 rounded-3xl" />
          
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img4} className="w-[270px] h-[416px] hover:border-8   border-yellow-500 rounded-3xl" />
          
          </div>
       
        </div>
        <div className="mt-12 flex  transform -translate-y-1/2 left-5 right-5 top-1/2">
              {/* <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>  */}
              <a href="#slide1" className="btn bg-white text-black btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn bg-white text-black btn-circle">
                ❯
              </a>
              {/* <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a> */}
            </div>
            
            
      </div>
    </div>
  );
};

export default Header;
