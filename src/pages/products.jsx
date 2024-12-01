import React, { useContext } from "react";
import Item from "../components/item";
import Search from "../components/search";
import "./products.css";
import { ProductContext } from "../context/ProductContxt";

const Products = () => {
  const {products,filterProducts} = useContext(ProductContext);
  return (
    <div className="store-wrapper">
      <Search />
      <div className="products-wrapper">
        {products.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}  
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
