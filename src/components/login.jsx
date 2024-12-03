import React, { useContext, useState } from "react";
import "./login.css";
import { UserContext } from "../context/UserContxt";

export default function Login() {
  const { LoginContext } = useContext(UserContext);
  const [loginCredetials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredetials, [name]: value });
  };

  const loginFunction = (e) => {
    e.preventDefault();
    LoginContext(loginCredetials);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="form-wrappper">
        <div className="form-header">
          <h3 className="title">Login To The Account</h3>
        </div>
        <form className="form">
          <input
            type="email"
            name="email"
            value={loginCredetials.email}
            className="form-group"
            placeholder="Email"
            onChange={handleLoginInput}
          />
          <input
            type="password"
            name="password"
            value={loginCredetials.password}
            className="form-group"
            placeholder="Password"
            onChange={handleLoginInput}
          />
          <button className="btn submit" onClick={loginFunction}>
            LogIn
          </button>
        </form>
        <div className="login-wrapper">
          <h4>
            Don't You Have A Account? <a href="/">Sign Up</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
