import React from 'react';
import { useState } from 'react';
import "./style.css"
import Swtimer from "./Swtimer";
import ControlButtons from "./ControlButtons";
  
const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  /*React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, []); */
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
    <div className="stop-watch">

      <Swtimer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}
  
export default Stopwatch;
