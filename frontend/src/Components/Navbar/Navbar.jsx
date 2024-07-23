import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  //use usestate to change the underline by clicking
  //and use onclick property in li to use usestate
  //use turnary operator to appear and disappear of underline

  //use <Link> tag to route

  const [menu, setMenu] = useState();
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>SHOP</p>
      </div>
      <ul className="nav_menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Women</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_cart">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-card-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
