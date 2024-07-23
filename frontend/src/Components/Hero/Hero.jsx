import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from '../Assets/arrow.png'
import heroImg from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="">
          <div className="hero_hand_icon">
            <p>New</p>
            <img src={handIcon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero_latest_btn">
            <div>Latest Collection</div>
            <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="heroRight">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
