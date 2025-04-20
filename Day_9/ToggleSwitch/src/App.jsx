import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <button
        id="toggle"
        data-state={isOn ? 'on' : 'off'}
        className={isOn ? 'on' : 'off'}
        onClick={handleToggle}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;
