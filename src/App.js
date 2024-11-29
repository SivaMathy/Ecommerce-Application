import logo from "./logo.svg";
import "./App.css";
import Products from "./pages/products";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cart from "./pages/cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/store" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
