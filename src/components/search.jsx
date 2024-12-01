import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContxt";
import SearchImg from "../assets/Vector.png";
import "./serach.css";
export default function Search() {
  const { filterProducts } = useContext(ProductContext);
  const handleSearch = (event) => {
   filterProducts(event.target.value)
  };
  return (
    <div className="serach-bar">
      <input
        className="search-input"
        placeholder="What are you looking for ?"
        onChange={handleSearch}
      />
      <img src={SearchImg} className="search-icon" />
    </div>
  );
}
