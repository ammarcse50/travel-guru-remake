import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../../public/rectangle1.png";
import img2 from "../../../../public/Sajek.png";
import img3 from "../../../../public/Sreemongol.png";
import img4 from "../../../../public/sundorbon.png";
import img5 from "../../../../public/Rectangle 26.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const handleBooking = () => {

      const elementCarousel =  document.querySelector('.carousel')
       const elementArrow = document.querySelector('.slider-arrow')
       const elementTicketBox= document.querySelector('.ticketBox')

      elementCarousel.classList.add('hidden')  
      elementArrow.classList.add('hidden')
      elementTicketBox.classList.remove('hidden')
    
  };

  return (
    <div
      className="hero min-h-screen text-white"
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
          <button
            onClick={handleBooking}
            className="btn bg-[#F9A51A] text-black "
          >
            Booking <FaArrowRight />
          </button>
        </div>
      </div>
                                         {/* TicketBox  */}


                                         
       <div className="ml-96 hidden ticketBox">
       <form className="card-body bg-white">
        <div className="form-control">
          <label className="label">
            <span className="label-text">origin</span>
          </label>
          <input type="name" placeholder="origin" className="input input-bordered text-black bg-gray-300" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input type="password" placeholder="Destination" className="input input-bordered text-black bg-gray-300" required />
        
        </div>
        <div className=" flex gap-3">
        <div>  <label className="label">
            <span className="label-text">From</span>
          </label>
          <input type="date" placeholder="Destination" className="input input-bordered text-black bg-gray-300" required /></div>
          <div>
          <label className="label">
            <span className="label-text">To</span>
          </label>
          <input type="date" placeholder="Destination" className="input input-bordered text-black bg-gray-300" required />
          </div>
        
        </div>
         
        <div className="form-control mt-6">
          <button className="btn bg-[#F9A51A] text-black">Start Booking</button>
        </div>
      </form>
       </div>
                            
                 {/* Carousel */}

      <div className="ml-[700px]  carousel">
        <div className="carousel w-full gap-7">
          <div id="slide1" className="carousel-item relative  ">
            <img
              src={img2}
              className="w-[270px] h-[416px] hover:border-8   border-yellow-500 rounded-3xl "
            />
          </div>
          <div id="slide2" className="carousel-item relative">
            <img
              src={img3}
              className="w-[270px] h-[416px] hover:border-8   border-yellow-500 rounded-3xl"
            />
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={img4}
              className="w-[270px] h-[416px] hover:border-8   border-yellow-500 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-[600px] slider-arrow flex  transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn bg-white text-black btn-circle">
          ❮
        </a>
        <a href="#slide3" className="btn bg-white text-black btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Header;
