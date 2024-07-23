import React from "react";
import "./Item.css";
const Items = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="ItemPriceNew">${props.new_price}</div>
        <div className="ItemPriceOld">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
