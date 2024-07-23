import React from "react";
import "./Offers.css";
import exclusive_img from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers for you.</h1>
        <p>Get the best deals on your favourite products.</p>
        <button className="offers_btn">View All</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
