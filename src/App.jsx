import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMICalculator from "./BMICalculator";
import Result from "./Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BMICalculator />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}
export default App;