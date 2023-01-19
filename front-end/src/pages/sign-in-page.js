import React, { useState } from "react";
import "../styles/sign-in-page.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignInPage = () => {
  const [userr, setUserr] = useState();
  const [passw, setPassw] = useState();

  const get = async () => {
    console.log('starts')
    const user = await axios.post("http://localhost:8001/login", {
      name: userr,
      pass: passw,
    });
    console.log('hello')
    console.log(user);
  };
  const users = (event) => {
    setUserr(event.target.value);
  };
  const passs = (event) => {
    setPassw(event.target.value);
  };

  return (
    <div className="border">
      <div className="container">
        <p>Instagram</p>
        <input placeholder="username" onChange={users} className="inp" />
        <input placeholder="Password" onChange={passs} className="inp" />
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
