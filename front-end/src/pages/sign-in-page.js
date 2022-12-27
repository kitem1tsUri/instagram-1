import React from "react";
import "../styles/sign-in-page.css";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <div className="border">
      <div className="container">
        <p>Instagram</p>
        <input placeholder="username" className="inp" />
        <input placeholder="Password" className="inp" />
        <div className="log-in">Log in</div>
        <div className="or">or</div>
        <div>Forgot password</div>
      </div>
      <div className="mini-container">
        Don't have an account?_<Link to={"/sign-up"}>sign up</Link>
      </div>
    </div>
  );
};
