import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = currentDateTime.toLocaleDateString('en-US', { weekday: 'long' });

  const date = currentDateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const time = currentDateTime.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="container">
      <div id="day">Day: {day}</div>
      <div id="date">Date: {date}</div>
      <div id="time">Time: {time}</div>
    </div>
  );
}

export default App;
