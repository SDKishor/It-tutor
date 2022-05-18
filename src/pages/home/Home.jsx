import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Comment } from "../../components/comment/Comment";
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

      <div className="feedbackSec">
        <h2>Student's Feedback</h2>
        <div className="contentContainer">
          <div className="leftside">
            <div className="imageContainer">
              <div className="img">
                <div className="img1"></div>
                <div className="img2"></div>
                <div className="img3"></div>
              </div>
            </div>
          </div>

          <div className="comments">
            <Comment></Comment>
            <button className="arrowIcon">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
