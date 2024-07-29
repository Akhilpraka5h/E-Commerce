import React from "react";
import "./ProductDisplay.css";
import star_Icon from "../Assets/star_icon.png";
import star_Dull_Icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="Productdisplay">
      <div className="productdisplay_left">
        <div className="productdisplay_img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay_img">
          <img src={product.image} alt="" className="productdisplay_main_img" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_star">
          <img src={star_Icon} alt="" />
          <img src={star_Icon} alt="" />
          <img src={star_Icon} alt="" />
          <img src={star_Icon} alt="" />
          <img src={star_Dull_Icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay_right_prices">
          <div className="productdisplay_right_oldPrice">
            ${product.old_price}
          </div>
          <div className="productdisplay_right_newPrice">
            ${product.new_price}
          </div>
          <div className="productdisplay_right_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            quam culpa maxime omnis recusandae sunt fugit ratione libero
            sapiente dolorum. Inventore mollitia aperiam quam aut quibusdam
            animi beatae, officia accusamus?
          </div>
          <div className="productdisplay_right_size">
            <h1>Select size</h1>
            <div className="productdisplay_right_sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button>ADD TO CART</button>
          <p className="productdisplay_right_category">
            <span>Category:</span>Women, T-shirt, Crop-Top
          </p>
          <p className="productdisplay_right_category">
            <span>Tags:</span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
