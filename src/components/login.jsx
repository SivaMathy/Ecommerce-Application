import React from "react";
import './login.css'

export default function login() {
  return (
    <div>
      <div className="form-wrappper">
        <div className="form-header">
          <h3 className="title">Login To The Account</h3>
        </div>
        <form className="form">
          <input type="text" className="form-group" placeholder="Email" />
          <input type="text" className="form-group" placeholder="Password" />

          <button className="btn submit">LogIn</button>
        </form>
        <div className="login-wrapper">
          <h4>
            Don't You Have A Account? <a href="/">Sign In</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
