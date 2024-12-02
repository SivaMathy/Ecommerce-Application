import React, {createContext, useState} from "react";
import UserData from "../data/user";
import {useNavigate} from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(UserData);
  const SignIn = (userInfo) => {
    setUser((prev) => {
      const updatedUserInfo = [...prev, userInfo];
      console.log("Updated User Info:", updatedUserInfo);
      return updatedUserInfo;
    });
  };

  const LoginContext = (loginDetails) => {
    const loggedUser = user.find((u) => u.email === loginDetails.email);

    if (loggedUser) {
      if (loggedUser.password === loginDetails.password) {
        window.location.href = "/store";
        if (localStorage.getItem("userId")) {
          localStorage.removeItem("userId");
        }
        localStorage.setItem("userId", JSON.stringify(loggedUser.id));
      } else {
        alert("Password is incorrect");
      }
    } else {
      alert("Email is not registered yet");
    }
  };

  return <UserContext.Provider value={{SignIn, LoginContext}}>{children}</UserContext.Provider>;
};
