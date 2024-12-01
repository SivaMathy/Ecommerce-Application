import React, { createContext, useState } from "react";
import ProductData from "../data/product"; 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products,setProducts] = useState(ProductData);

  const filterProducts = (query) => {
    if (query.trim() === "") {
      setProducts(ProductData);
    } else {
      const filteredProducts = ProductData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };


  return (
    <ProductContext.Provider value={{products,filterProducts}}>
      {children}
    </ProductContext.Provider>
  );
};