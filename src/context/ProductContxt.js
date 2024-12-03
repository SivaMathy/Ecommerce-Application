import React, {createContext, useState} from "react";
import ProductData from "../data/product";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState(ProductData);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const filterProducts = (query) => {
    if (query.trim() === "") {
      setProducts(ProductData);
    } else {
      const filteredProducts = ProductData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
      setProducts(filteredProducts);
    }
  };

  const AddToCart = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      const userId = localStorage.getItem("userId");
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItemIndex = existingCart.findIndex((item) => item.id === id);

      if (cartItemIndex !== -1) {
        existingCart[cartItemIndex].quantity = (existingCart[cartItemIndex].quantity || 1) + 1;
      } else {
        existingCart.push({
          id,
          userId,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(existingCart));
    } else {
      console.error("Product not found for ID:", id);
    }
  };

  const GetCartItem = () => {
    const allItemsOnCart = JSON.parse(localStorage.getItem("cart")) || [];
    const currentUser = localStorage.getItem("userId");
    const userCartItems = allItemsOnCart.filter((item) => item.userId === currentUser);
    const cartDetails = userCartItems.map((cartItem) => {
      const itemDetail = ProductData.find((data) => data.id === cartItem.id);
      const quantity = cartItem.quantity
      return[ itemDetail ,quantity];
    });
    return cartDetails;
  };

  const updateCartInLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const IncreaseItemCount = (id) => {
    const currentUser = localStorage.getItem("userId"); 
    const updatedCart = cart.map((item) =>
      item.id === id && item.userId === currentUser
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  
    updateCartInLocalStorage(updatedCart);
  };
  
  const DecreaseItemCount = (id) => {
    const currentUser = localStorage.getItem("userId");
  
    const updatedCart = cart
      .map((item) =>
        item.id === id && item.userId === currentUser && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
      .filter((item) => !(item.id === id && item.userId === currentUser && item.quantity === 1)); 
    updateCartInLocalStorage(updatedCart);
  };
  

  const DeleteItemFromCart = (id) => {
    const currentUser = localStorage.getItem("userId");
    const updatedCart = cart.filter(
      (item) => !(item.userId === currentUser && item.id === id)
    );
    updateCartInLocalStorage(updatedCart); 
  };
  
  const sumOfItem = () =>{
    const allItemsOnCart = JSON.parse(localStorage.getItem("cart")) || [];
    const currentUser = localStorage.getItem("userId");
    const userCartItems = allItemsOnCart.filter((item) => item.userId === currentUser);
   return userCartItems.length
  }

  const totalBillAmount = () => {
    const allItemsOnCart = JSON.parse(localStorage.getItem("cart")) || [];
    const currentUser = localStorage.getItem("userId");
    const userCartItems = allItemsOnCart.filter((item) => item.userId === currentUser);
    const totalCost = userCartItems.reduce((sum, cartItem) => {
      const itemDetail = ProductData.find((data) => data.id === cartItem.id);
      if (itemDetail) {
        const quantity = cartItem.quantity;
        const itemCost = itemDetail.price * quantity;
        return sum + itemCost; 
      }
      return sum; 
    }, 0); 
  
    return totalCost;
  };
  

  return (
    <ProductContext.Provider value={{products, filterProducts, AddToCart, GetCartItem,IncreaseItemCount,DecreaseItemCount,DeleteItemFromCart,sumOfItem,totalBillAmount}}>
      {children}
    </ProductContext.Provider>
  );
};
