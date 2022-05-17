import React from "react";
import { Footer } from "../../components/footer/Footer";
import "./home.css";

export const Home = () => {
  return (
    <div className="homePage">
      <div className="banner">
        <h2>Information is the Oxygen of The Modern Age</h2>
        <div className="learnMore">
          <p>So lets </p>
          <button>Learn More</button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
