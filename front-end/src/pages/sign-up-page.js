import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sign-in-page.css";
import axios from "axios";
import { useState } from "react";
import { SignInPage } from "./sign-in-page";

export const SignUpPage = () => {
  const [event, setEvent] = useState();
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const signUp = async (setEvent) => {
    const user = await axios.post("http://localhost:8000/", {
      userName: event,
      password: value,
    });
    alert("now you have an instagram account");
    navigate("/sign-in");
  };
  const getValue = (event) => {
    setEvent(event.target.value);
    console.log(event.target.value, " username");
  };
  const gotValue = (event) => {
    setValue(event.target.value);
    console.log(event.target.value, " password");
  };
  return (
    <div className="border">
      <div className="container">
        <p>Instagram</p>
        <input placeholder="username" onChange={getValue} className="inp" />
        <input placeholder="Password"  onChange={gotValue} className="inp" />
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
