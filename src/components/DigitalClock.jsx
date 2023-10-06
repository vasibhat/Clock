import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Import your CSS file

function DigitalClock() {
  // State for storing the current time
  const [time, setTime] = useState(new Date());

  // Function to update the time
  const updateTime = () => {
    setTime(new Date());
  };

  // Use useEffect to start an interval to update the time every second
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Format the time in HH:MM:SS format
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="digital-clock-container">
      {/* <h1>Digital Clock</h1> */}
      <p className="digital-clock-text">{formattedTime}</p>
    </div>
  );
}

export default DigitalClock;
