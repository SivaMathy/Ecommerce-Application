import React, {useContext} from "react";
import "./cart.css";
import Cartitems from "../components/cartitems";
import Checkout from "../components/checkout";
import {ProductContext} from "../context/ProductContxt";
const Cart = () => {
  const {GetCartItem} = useContext(ProductContext);
  const handleGetCartItem = () => {
    const items = GetCartItem();     
    return items; 
};
const cartItems = handleGetCartItem();
console.log(cartItems)
  return (
    <div className="cart-wrapper">
      <h3 className="cart-title">Your Bag</h3>
      <div className="container">
        <div className="left-wrapper">
        {cartItems.map((item, index) => (
            <div key={index}>
              <Cartitems name={item.name} price={item.price} image={item.image}/>
            </div>
          ))}
        </div>
        <div className="right-wrapper">
          <Checkout />
        </div>
      </div>
    </div>
  );
};
export default Cart;
