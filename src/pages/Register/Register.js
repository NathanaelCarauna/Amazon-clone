import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import AmazonLogo from "../../Amazon_Logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register">
      <Link to="/">
        <img src={AmazonLogo} className="register-logo" alt="logo" />
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onclick={register} className="continue">
            continue
          </button>
          <div className="detail">
            <p>Already have an account?</p>
            <Link to='/login' className="signIn-link">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
