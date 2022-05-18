import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

export const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleSingup = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    console.log(user);
    navigate("/");
  }

  return (
    <div className="loginPage">
      <div className="login">
        <h2>Register</h2>
        <form onSubmit={handleSingup} action="">
          <input type="text" placeholder="Username" name="UserName" required />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
          />

          <p className="errorText"></p>
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
