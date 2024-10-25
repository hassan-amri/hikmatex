import React from "react";
import "./Hero.css";
import img1 from "./img1.jpg";
import heroImg from "./heroImg.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h2
          data-aos="fade-down"
          data-aos-duration="1500"
          
        >
          Welcome to <span>HIKMA</span>
          <b>TEX</b> Textiles
        </h2>
        <h5 data-aos="zoom-in" data-aos-duration="1500">Elevate Your Space with Luxurious Fabrics</h5>
        <p data-aos="zoom-in" data-aos-duration="1500">
          Discover our exquisite collection of high-quality textiles, perfect
          for every project. From vibrant prints to timeless solids, we have the
          perfect fabric to bring your vision to life.
        </p>
        <a href="#products" data-aos="zoom-in" data-aos-duration="1500">
          <button>Discover Now</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
