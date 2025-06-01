import React, { useState, useEffect } from "react";

function App() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(5);
  const [simpleInterest, setSimpleInterest] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  useEffect(() => {
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    setSimpleInterest(interest.toFixed(2));
    setTotalAmount(total.toFixed(2));
  }, [principal, rate, time]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="bg-gradient-to-br from-white via-gray-100 to-white shadow-xl rounded-xl p-8 w-full max-w-md text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">
          Simple Interest Calculator
        </h1>

        {/* inputs */}
        <div className="mb-4">
          <label htmlFor="principal" className="block mb-1 font-semibold">
            Principal Amount
          </label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rate" className="block mb-1 font-semibold">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="time" className="block mb-1 font-semibold">
            Time (years)
          </label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* outputs */}
        <div className="bg-blue-300 p-3 rounded mb-3 font-semibold">
          <span className="mr-2">Simple Interest:</span>
          ₹&nbsp;<span id="simpleInterest">{simpleInterest}</span>
        </div>

        <div className="bg-green-300 p-3 rounded font-semibold">
          <span className="mr-2">Total Amount:</span>
          ₹&nbsp;<span id="totalAmount">{totalAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
