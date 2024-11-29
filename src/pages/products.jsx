import React, {Component} from "react";
import Item from "../components/item";
import Search from "../components/search";
import "./products.css";
import ProductData from '../data/product'
export default class Products extends Component {
  render() {
    return (
      <div className="store-wrapper">
        <Search />
        <div className="products-wrpper">
          {
            ProductData.map((item)=>(
              <Item />
            ))
          }

        </div>
      </div>
    );
  }
}
