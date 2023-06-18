import React, { useState, useEffect } from 'react';
import {
  getSeconds,
  getHours,
  getMinutes,
  getMilliseconds,
} from '../utils/TimeUtils';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const start = () => {
    console.log('start');
    setRunning(true);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 9);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const stop = () => {
    console.log('stop');
    setRunning(false);
  };

  const reset = () => {
    console.log('reset');
    setTime(0);
    stop();
  };

  const getTimeWithLeadingZero = (time) => {
    return time < 10 ? '0' + time : time;
  };

  return (
    <>
      <h4>
        {getTimeWithLeadingZero(getHours(time))}:
        {getTimeWithLeadingZero(getMinutes(time))}:
        {getTimeWithLeadingZero(getSeconds(time))}.{getMilliseconds(time)}
      </h4>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
