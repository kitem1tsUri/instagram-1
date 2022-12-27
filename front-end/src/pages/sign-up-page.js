import React from "react";
import { Link } from "react-router-dom";
import "../styles/sign-in-page.css";
import axios from "axios";

export const SignUpPage = () => {
  const signUp = async () => {
    const user = await axios.post("http://localhost:8000/", {
      userName: `event.target.value`,
    });
    console.log(user);
  };
  const getValue = (event) => { 
    console.log(event.target.value)
  }
  return (
    <div className="border">
      <div className="container">
        <p>Instagram</p>
        <input placeholder="username" onChange={getValue}  className="inp" />
        <input placeholder="Password"  className="inp" />
        <div className="log-in" onClick={signUp}>
          Sign up
        </div>
        <div className="or">or</div>
        <div>Forgot password</div>
      </div>
      <div className="mini-container">
        Don't have an account?_<Link to={"/sign-in"}>sign in</Link>
      </div>
    </div>
  );
};
