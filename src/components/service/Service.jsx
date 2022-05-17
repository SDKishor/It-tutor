import React from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";

export const Service = () => {
  const navigate = useNavigate();

  const proccedToChackout = () => {
    navigate("/chackout");
  };
  return (
    <div className="service">
      <div className="Serviceimage">
        <img
          src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <h3 className="serviceTitle">Web Devlopment</h3>
      <h3>Price: 5000.00 TAKA </h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
        voluptatibus, est distinctio earum quo consectetur.
      </p>
      <button onClick={proccedToChackout}>Book Now</button>
    </div>
  );
};
