import React from "react";
import "./login.css";
import image from "./photos/logo-ashoka.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={image} />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signinbutton">
            Sign In
          </button>
        </form>

        <p>
          By Signing in you are agreeing to forego all your private data to
          Samvit Jatia for his discrepancy.
        </p>

        <button onClick={register} className="login_registerbutton">
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Login;
