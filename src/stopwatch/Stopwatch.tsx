import React, { useRef, useState } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
  // Add your state, refs, and logic here
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<any>(null);
  const [time, settime] = useState(0);


  const start = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => settime(prev => prev + 1), 1000);
      setIsRunning(true);
    }
  };

  const stop = () => {
    // stop logic
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    // reset logic
    setIsRunning(false);
    clearInterval(intervalRef.current);
    settime(0);
  };

  const formatTime = (seconds: number) => {
    // utility to format time, implement yourself
    const hrs=String(Math.floor(seconds/3600)).padStart(2,'0');
    const min=String(Math.floor(seconds/60)).padStart(2, '0');
    const sec=String(seconds%60).padStart(2, '0');

    return `${hrs}: ${min}:${sec}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-time">{formatTime(time)}</h1>
      <div className="stopwatch-controls">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
