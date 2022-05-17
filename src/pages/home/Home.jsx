import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Service } from "../../components/service/Service";
import "./home.css";

export const Home = () => {
  return (
    <div className="homePage">
      <div className="banner">
        <h2>Information is the Oxygen of The Modern Age</h2>
      </div>
      <div className="serviceSec">
        <h2>Popular Services</h2>
        <div className="services">
          <Service></Service>
          <Service></Service>
          <Service></Service>
        </div>
        <button className="seeMoreBtn">SEE MORE</button>
      </div>
      <Footer></Footer>
    </div>
  );
};
