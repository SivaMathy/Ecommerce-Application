import React, { useContext, useState } from "react";
import "./signup.css";
import userData from "../data/user";
import { UserContext } from "../context/UserContxt";
export default function Signin() {
  const {SignIn} =useContext(UserContext)
  const [userInfo, setUserInfo] = useState(userData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signUpFunction = (e) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      console.log("Passwords do not match");
      return;
    }

    const newUser = {
      id:userInfo.length + 1,
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    SignIn(newUser);

    setFormData({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <div className="signin-wrapper">
      <div className="form-wrappper">
        <div className="form-header">
          <h3 className="title">Create an account</h3>
        </div>
        <form className="form" onSubmit={signUpFunction}>
          <input
            type="text"
            className="form-group"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInput}
          />
          <input
            type="email"
            className="form-group"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInput}
          />
          <input
            type="password"
            className="form-group"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInput}
          />
          <input
            type="password"
            className="form-group"
            placeholder="Confirm Password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleInput}
          />
          <button type="submit" className="btn submit">
            Create Account
          </button>
        </form>
        <div className="login-wrapper">
          <h4>
            Already have an account? <a href="/login">Log In</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
