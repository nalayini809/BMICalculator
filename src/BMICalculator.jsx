import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function BMICalculator() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function calculateBMI() {
    if (!name || !weight || !height) {
      alert("Please fill all fields");
      return;
    }
    let h = height / 100;
    let result = weight / (h * h);
    let finalBmi = result.toFixed(2);
    let message = "";
    if (finalBmi < 18.5) message = "Underweight";
    else if (finalBmi < 24.9) message = "Normal";
    else if (finalBmi < 29.9) message = "Overweight";
    else message = "Obese";

    navigate("/result", {
      state: { name, bmi: finalBmi, message }
    });
  }
  return (
    <div className="container">
      <div className="card">
        <h2>BMI Calculator</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>
    </div>
  );
}