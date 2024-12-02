import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./pages/products";
import Cart from "./pages/cart";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ProductProvider} from "./context/ProductContxt";
import {UserProvider} from "./context/UserContxt";

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
          <Route
            path="/cart"
            element={
              <ProductProvider>
                <Cart />
              </ProductProvider>
            }
          />
          <Route
            path="/login"
            element={
              <UserProvider>
                <LoginPage />
              </UserProvider>
            }
          />

          <Route
            path="/"
            element={
              <UserProvider>
                <SignupPage />
              </UserProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
