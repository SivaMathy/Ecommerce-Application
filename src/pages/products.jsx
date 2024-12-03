import React, {useContext} from "react";
import Item from "../components/item";
import Search from "../components/search";
import "./products.css";
import {ProductContext} from "../context/ProductContxt";

const Products = () => {
  const {products, filterProducts, AddToCart} = useContext(ProductContext);

  const handleAddToCart = (id) => {
    AddToCart(id);
  };

  const rediretToCart = () => {
    window.location.href = "/cart";
  };
  return (
    <div className="store-wrapper">
      <Search />
      <div className="view-cart">
        <button className="addTocart" onClick={rediretToCart}>
          View Cart
        </button>
      </div>
      <div className="products-wrapper">
        {products.map((item, index) => (
          <Item
            id={item.id}
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
