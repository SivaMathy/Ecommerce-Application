import React, {Component} from "react";
import "./item.css";
import ItemImg from "../assets/1.png";
export default class Item extends Component {
  render() {
    return (
      <div className="item-wrapper">
        <img src={ItemImg} alt="item image" className="item-img" />
        <h3 className="item-name">Item Name</h3>
        <h3 className="item-price">Rs 100.00</h3>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    );
  }
}
