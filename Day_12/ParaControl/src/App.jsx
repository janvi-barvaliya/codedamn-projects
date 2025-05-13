import React, { useState } from 'react';
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleParagraph = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <button id="toggle-btn" onClick={toggleParagraph}>
        Toggle Paragraph
      </button>
      
      {isVisible && (
        <p id="my-paragraph" className="gradient-text">
          This is a toggleable paragraph. Click the button to hide or show it.
        </p>
      )}
    </div>
  );
}

export default App;
