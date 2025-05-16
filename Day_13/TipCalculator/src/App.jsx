import { useState } from 'react';
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleCalculate = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);

    if (!isNaN(bill) && !isNaN(tip)) {
      const total = bill + (bill * tip / 100);
      setTotalAmount(total.toFixed(2));
    } else {
      setTotalAmount('Invalid input');
    }
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      
      <input
        type="number"
        id="billAmount"
        placeholder="Enter bill amount"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
      />

      <input
        type="number"
        id="tipPercent"
        placeholder="Enter tip percentage"
        value={tipPercent}
        onChange={(e) => setTipPercent(e.target.value)}
      />

      <button id="calculateAmount" onClick={handleCalculate}>
        Calculate
      </button>

      <div>
        Total Amount: <span id="totalAmount">{totalAmount}</span>
      </div>
    </div>
  );
}

export default App;
