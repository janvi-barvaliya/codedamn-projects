import { useState } from "react";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState((0 * 9) / 5 + 32);

  // Handle Celsius input change
  const handleCelsiusChange = (e) => {
    const celsiusValue = parseFloat(e.target.value);
    setCelsius(celsiusValue);
    setFahrenheit((celsiusValue * 9) / 5 + 32);
  };

  // Handle Fahrenheit input change
  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = parseFloat(e.target.value);
    setFahrenheit(fahrenheitValue);
    setCelsius(((fahrenheitValue - 32) * 5) / 9);
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <div className="input-group">
        <label htmlFor="celsius">Celsius (°C):</label>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="fahrenheit">Fahrenheit (°F):</label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default App;
