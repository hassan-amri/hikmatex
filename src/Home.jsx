import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import "./Home.css";
import Cta from "./Cta";
import Products from "./Products";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Products/>
      <Cta/>
      <WhyUs />
      
    </div>
  );
}

export default Home;
