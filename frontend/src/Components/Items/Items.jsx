import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="ItemPriceNew">${props.new_price}</div>
        <div className="ItemPriceOld">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
