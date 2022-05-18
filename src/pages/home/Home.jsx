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
          <Service
            name={"Web Devlopment"}
            price={15500}
            description={
              "it is a full course that i am going to teach you bost frontend and backend part. course duration 6 month."
            }
            image="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></Service>
          <Service
            name={"Web Design"}
            price={5500}
            description={
              "it is a course for those who want to focus on front end part of the website. course duration 3 month."
            }
            image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171"
          ></Service>
          <Service
            name={"Office Course"}
            price={3500}
            description={
              "in this course you going to learn about all main microsoft office software. like Microsoft office, powerpoint, excel, database. course duration 3 month "
            }
            image={
              "https://images.unsplash.com/photo-1632239776255-0a7f24814df2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171"
            }
          ></Service>
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
