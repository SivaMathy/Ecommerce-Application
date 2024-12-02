import React, {useContext} from "react";
import "./cart.css";
import Cartitems from "../components/cartitems";
import Checkout from "../components/checkout";
import {ProductContext} from "../context/ProductContxt";
const Cart = () => {
  const {GetCartItem} = useContext(ProductContext);
  const handleGetCartItem = () => {
    GetCartItem();
  };
  handleGetCartItem();

  return (
    <div className="cart-wrapper">
      <h3 className="cart-title">Your Bag</h3>
      <div className="container">
        <div className="left-wrapper">
          <Cartitems />
          <Cartitems />
          <Cartitems />
        </div>
        <div className="right-wrapper">
          <Checkout />
        </div>
      </div>
    </div>
  );
};
export default Cart;
