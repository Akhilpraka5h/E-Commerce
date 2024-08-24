import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import addProduct_Icon from "../../assets/Product_Cart.svg";
import listProduct_Icon from "../../assets/Product_list_icon.svg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={addProduct_Icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={listProduct_Icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
