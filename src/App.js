import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./pages/products";
import Cart from "./pages/cart";
import LoginPage from "./pages/loginPage";
import SigninPage from "./pages/signinPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContxt"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/store"
            element={
              <ProductProvider>
                <Products />
              </ProductProvider>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SigninPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
