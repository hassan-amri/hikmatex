import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import "./Home.css";
import Cta from "./Cta";
import Faq from "./Faq";
import Products from "./Products";
function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="home">
      <Hero />
      <Products/>
      <Cta/>
      <WhyUs />
      <Faq />
      
    </div>
  );
}

export default Home;
