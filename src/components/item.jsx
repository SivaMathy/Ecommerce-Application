import React, { useContext } from "react";
import "./item.css";

const Item = ({id, name, image, price,addToCart }) => {
  const handleAddToCart = () => {
    addToCart(id); 
  };

  return (
    <div className="item-wrapper">
      <img src={image} alt={`${name} image`} className="item-img" />
      <h3 className="item-name">{name}</h3>
      <h3 className="item-price">Rs {price}</h3>
      <button className="add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default Item;
