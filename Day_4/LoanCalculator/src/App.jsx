import { useState } from 'react';
import './App.css'

function App() {
  const [totalCost, setTotalCost] = useState('');
  const [numberOfIntervals, setNumberOfIntervals] = useState('');
  const [monthlyInstallment, setMonthlyInstallment] = useState('');

  const calculateEMI = () => {
    const cost = parseFloat(totalCost);
    const intervals = parseInt(numberOfIntervals);

    if (!isNaN(cost) && !isNaN(intervals) && intervals !== 0) {
      const emi = cost / intervals;
      setMonthlyInstallment(emi.toFixed(2));
    } else {
      setMonthlyInstallment('Invalid input');
    }
  };

  return (
    <div className="app-container">
      <div className="calculator-box">
        <h1 className="title">EMI Calculator</h1>

        <input
          type="number"
          id="totalCost"
          placeholder="Enter total loan amount"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
          className="input-field"
        />

        <input
          type="number"
          id="numberOfIntervals"
          placeholder="Enter number of payments"
          value={numberOfIntervals}
          onChange={(e) => setNumberOfIntervals(e.target.value)}
          className="input-field"
        />

        <button id="calculate" onClick={calculateEMI} className="calculate-button">
          Calculate
        </button>

        <div id="output" className="output">{monthlyInstallment}</div>
      </div>
    </div>

  );
}

export default App;
