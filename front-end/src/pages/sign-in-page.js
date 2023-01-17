import React from "react";
import "../styles/sign-in-page.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignInPage = () => {
  const get = async () => {
    const user = await axios.post("http://localhost:8001/", {
      name: "claymore",
      pass: "kitetsu",
    });
    console.log(user);
  };

  return (
    <div className="border">
      <div className="container">
        <p>Instagram</p>
        <input placeholder="username" className="inp" />
        <input placeholder="Password" className="inp" />
        <div className="log-in" onClick={get}>
          Log in
        </div>
        <div className="or">or</div>
        <div>Forgot password</div>
      </div>
      <div className="mini-container">
        Don't have an account?_<Link to={"/sign-up"}>sign up</Link>
      </div>
    </div>
  );
};
