import React, { useState } from "react";
import "./App.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  function calculateBMI() {
    if (!weight || !height) return;

    let h = height / 100;
    let result = weight / (h * h);
    let finalBmi = result.toFixed(2);

    setBmi(finalBmi);

    if (finalBmi < 18.5) {
      setMessage("Underweight ");
    } else if (finalBmi >= 18.5 && finalBmi < 24.9) {
      setMessage("Normal Weight");
    } else if (finalBmi >= 25 && finalBmi < 29.9) {
      setMessage("Overweight");
    } else {
      setMessage("Obese ");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>BMI Calculator</h2>

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

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div className="result">
            <h3>Your BMI: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
