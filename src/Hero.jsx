import React from "react";
import "./Hero.css";
import img1 from "./img1.jpg";
import heroImg from "./heroImg.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h2>
          Welcome to <span>HIKMA</span>
          <b>TEX</b> Textiles
        </h2>
        <h5>Elevate Your Space with Luxurious Fabrics</h5>
        <p>
          Discover our exquisite collection of high-quality textiles, perfect
          for every project. From vibrant prints to timeless solids, we have the
          perfect fabric to bring your vision to life.
        </p>
        <a href="">
          <button>Discover Now</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
