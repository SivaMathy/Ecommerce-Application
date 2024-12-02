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

  const AddToCart = (id) => {
    const product = products.find((p) => p.id === id);
  
    if (product) {
      const cartItem = {
        id,
        userId: localStorage.getItem("userId"),
      };

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      console.error("Product not found for ID:", id);
    }
  };

  const GetCartItem = () => {
    const allItemsOnCart = JSON.parse(localStorage.getItem("cart")) || []; 
    const currentUser = localStorage.getItem("userId"); 
    const userCartItems = allItemsOnCart.filter(item => item.userId === currentUser);
    const cartDetails = userCartItems.map(cartItem => {
      const itemDetail = ProductData.find(data => data.id === cartItem.id);
     return itemDetail;
  });

  return cartDetails;
};
  
  return (
    <ProductContext.Provider value={{products,filterProducts,AddToCart,GetCartItem}}>
      {children}
    </ProductContext.Provider>
  );
};