import React from "react";
import "./chackout.css";

export const Chackout = () => {
  return (
    <div className="chackoutPage">
      <form className="studentInfo">
        <h3>Student's Details</h3>
        <div className="line"></div>
        <div className="inputGroup">
          <label>Full Name: </label> <br />
          <input type="text" name="fullname" required />
        </div>
        <div className="inputGroup">
          <label>Email: </label> <br />
          <input type="email" name="email" required />
        </div>
        <div className="inputGroup">
          <label>Mobile Number: </label> <br />
          <input type="number" name="mobileNum" />
        </div>
        <div className="inputGroup">
          <label>Massage: </label> <br />
          <textarea name="massage"></textarea>
        </div>
      </form>
      <div className="courseInfo">
        <div className="courseContainer">
          <h3>From: Kishor32</h3>
          <div className="line"></div>
          <div className="secelectedCourse">
            <h4>Web devlopment course</h4>
            <p>5000 TAKA</p>
          </div>
          <div className="buttonContainer">
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
