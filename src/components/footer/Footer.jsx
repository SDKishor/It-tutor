import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="logo footerLogo">
        <span>IT</span> Tutor
      </div>
      <div className="contactSec">
        <div className="contactOption">
          <FontAwesomeIcon className="faicon" icon={faPhone} />
          <p>646-481-5256</p>
        </div>
        <div className="contactOption">
          <FontAwesomeIcon className="faicon" icon={faHouse} />
          <p> 1115 Broadway, 11th Fl, New York, NY 10010</p>
        </div>
        <div className="contactOption">
          <FontAwesomeIcon className="faicon" icon={faEnvelope} />
          <p>kishorsutra021@gmail.com</p>
        </div>
        <div className="contactOption">
          <FontAwesomeIcon className="faicon" icon={faClock} />
          <p> Daily: 10:00 am – 8:00 pm</p>{" "}
        </div>
      </div>
    </footer>
  );
};
