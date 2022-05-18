import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";

export const Signin = () => {
  return (
    <div className="loginPage">
      <div className="login">
        <h2>Register</h2>
        <form action="">
          <input type="text" placeholder="Username" name="UserName" required />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
          />
          <button className="loginPageBtn" type="submit">
            Register
          </button>
        </form>
        <p className="registerLink">
          Already have an account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
