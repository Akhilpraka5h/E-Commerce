import React from "react";
import "./Footer.css";
import footer_Logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={footer_Logo} alt="" />
        <p>Shoppy</p>
      </div>
      <ul className="footerLinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocialMedia_Icon">
        <div className="footer_iconsConatiner">
          <img src={instagram} alt="" />
        </div>
        <div className="footer_iconsConatiner">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer_iconsConatiner">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footerCopyright">
        <hr />
        <p>Copyright © 2024 Shoppy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
