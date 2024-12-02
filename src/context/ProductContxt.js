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

  const AddToCart = (id, userId) => {
    const product = products.find((p) => p.id === id);
  
    if (product) {
      const cartItem = {
        ...product,
        userId: localStorage.getItem("userId"),
      };

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
  
      console.log("Item added to cart:", cartItem);
    } else {
      console.error("Product not found for ID:", id);
    }
  };

  const GetCartItem = () =>{
    console.log("test")
  }
  
  return (
    <ProductContext.Provider value={{products,filterProducts,AddToCart,GetCartItem}}>
      {children}
    </ProductContext.Provider>
  );
};