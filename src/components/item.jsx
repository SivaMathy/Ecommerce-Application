import React from "react";
import "./item.css";

const Item = ({ name, image, price }) => {
  return (
    <div className="item-wrapper">
      <img src={image} alt={`${name} image`} className="item-img" />
      <h3 className="item-name">{name}</h3>
      <h3 className="item-price">Rs {price}</h3>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default Item;
