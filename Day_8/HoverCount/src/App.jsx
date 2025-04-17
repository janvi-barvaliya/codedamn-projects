import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleHover = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <button 
        data-testid="button" 
        onMouseEnter={handleHover}
        className="hover-button"
      >
        Hover Me
      </button>
      <h1 data-testid="count">{count}</h1>
    </div>
  );
};

export default App;
