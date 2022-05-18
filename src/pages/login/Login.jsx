import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="loginPage">
      <div className="login">
        <h2>Login</h2>
        <form action="">
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            required
          />
          <button className="loginPageBtn" type="submit">
            Login
          </button>
        </form>
        <p className="registerLink">
          Don't have an account <Link to="/signin">Register Here</Link>
        </p>
        <button className="googleBtn">
          <div className="logo">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
            />
          </div>
          <p>Login With Google</p>
        </button>
      </div>
    </div>
  );
};
