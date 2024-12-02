import React from "react";
import "./signin.css";
export default function Signin() {
  return (
    <div className="signin-wrapper">
      <div className="form-wrappper">
        <div className="form-header">
          <h3 className="title">Create an account</h3>
        </div>
        <form className="form">
          <input type="text" className="form-group" placeholder="Name" />
          <input type="text" className="form-group" placeholder="Email" />
          <input type="text" className="form-group" placeholder="Password" />
          <input type="text" className="form-group" placeholder="Confirm Password" />

          <button className="btn submit">Creat Account</button>
        </form>
        <div className="login-wrapper">
            <h4>Already have a account?   <a href="/login">Log In</a></h4>
        </div>
      </div>
    </div>
  );
}
