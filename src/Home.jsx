import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Hero />
      <WhyUs />
    </div>
  );
}

export default Home;
