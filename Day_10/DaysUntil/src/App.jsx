import { useState } from 'react';
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [daysLeft, setDaysLeft] = useState(null);
  const [error, setError] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setError('');
    setDaysLeft(null);
  };

  const calculateDays = () => {
    if (!selectedDate) return;

    const today = new Date();
    const inputDate = new Date(selectedDate);

    // Set time to 0:00:00 s
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    const diffInTime = inputDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    if (diffInDays < 0) {
      setError('Error: Past Date Entered');
      setDaysLeft(null);
    } else {
      setError('');
      setDaysLeft(diffInDays);
    }
  };

  return (
    <div className="app">
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button id="findDays" onClick={calculateDays}>
        Find Days
      </button>
      <div id="error">{error}</div>
      {daysLeft !== null && <span id="daysLeft">{daysLeft}</span>}
    </div>
  );
}

export default App;
