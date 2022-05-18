import React from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";

export const Service = ({ name, price, description, image }) => {
  const navigate = useNavigate();

  const proccedToChackout = () => {
    navigate("/chackout");
  };
  return (
    <div className="service">
      <div className="Serviceimage">
        <img src={image} alt="" />
      </div>
      <h3 className="serviceTitle">{name}</h3>
      <h3>Price: {price}.00 TAKA </h3>
      <p>{description}</p>
      <button onClick={proccedToChackout}>Book Now</button>
    </div>
  );
};
