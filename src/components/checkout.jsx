import React, {Component, useContext} from "react";
import "./checkout.css";
import {ProductContext} from "../context/ProductContxt";
const Checkout = () => {
  const{sumOfItem,totalBillAmount} = useContext(ProductContext);

  const totalItemsOnCart = sumOfItem();
  const totalBill = totalBillAmount();
  return (
    <div className="checkout-wrapper">
      <h3>Totla Items In Your Cart : {totalItemsOnCart}</h3>
      <h3>Yout Bill : {totalBill}</h3>
      <button className="btn">Check Out</button>
    </div>
  );
};
export default Checkout;
