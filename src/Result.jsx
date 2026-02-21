import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import underweight from "./underweight.png";
import normal from "./normal.png";
import overweight from "./overweight.png";
import obesity from "./obesity.png";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) {
    return (
      <div className="result-container">
        <div className="result-card">
          <h2>No Data Found </h2>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    );
  }
  const { name, bmi, message } = location.state;
  const categoryImages = {
    Underweight: underweight,
    Normal: normal,
    Overweight: overweight,
    Obese: obesity,
  };
  const image = categoryImages[message];
  return (
    <div className="result-container">
      <div className={`result-card ${message.toLowerCase()}`}>
        <h2>Hi {name}👋</h2>

        <p className="bmi-value">Your BMI: {bmi}</p>

        <h1 className="status">Status: {message}</h1>
        <img src={image} alt="bmi-status" className="bmi-image" />
        <button onClick={() => navigate("/")}>Check Again</button>
      </div>
    </div>
  );
}