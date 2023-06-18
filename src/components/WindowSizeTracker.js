import React, { useState, useLayoutEffect, useEffect, useReducer } from 'react';

export default function WindowSizeTracker() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isListening, setListening] = useState(true);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (isListening) {
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    }
  }, [isListening]);

  useLayoutEffect(() => {
    document.body.style.color = 'white';
    if (width < height) {
      document.body.style.background = 'red';
    } else {
      document.body.style.background = 'blue';
    }
  });

  return (
    <>
      <br />
      <br />
      {width}x{height}{' '}
      <button onClick={() => setListening(!isListening)}>
        Listening: {isListening.toString()}
      </button>
    </>
  );
}
