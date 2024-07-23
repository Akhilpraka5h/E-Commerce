import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { ALL_Product } = useContext(ShopContext);
  return (
    <div className="shop_catergory">
      <img className="shopcategory_banner" src={props.banner} alt="" />
      <div className="shopcategory_indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sorted by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory_products">
        {ALL_Product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory_loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
