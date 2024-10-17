import React, { useState } from "react";
import tent from "./tente.jpg";
import weaving from './weaving.jpeg';
import knitting from './knitting.jpeg';

import "./Products.css";

function Products() {
  const [selectedImage, setSelectedImage] = useState(tent); // Default image

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="products">
      <h2>
        <span>Our</span> Products
      </h2>
      <div className="products__container">
        <div className="products__left">
        <h3>Categories :</h3>
        <ul>
          <li onClick={() => handleClick(tent)}>Decorative Tent Fabric</li>
          <li onClick={() => handleClick(weaving)}>Mattress Weaving Ticking Jacquard Fabric</li>
          <li onClick={() => handleClick(knitting)}>Mattress Knitting Ticking Jacquard Fabric</li>
          <li onClick={() => handleClick(tent)}>Tarpaulin Fabric</li>
          <li onClick={() => handleClick(tent)}>Technical Fabric</li>
        </ul>
      </div>
      <div className="products__right">
        <img src={selectedImage} alt="Product" />
      </div>
      </div>
      
    </div>
  );
}

export default Products;