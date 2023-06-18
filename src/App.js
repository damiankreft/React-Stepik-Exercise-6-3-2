import React from 'react';
import './style.css';
import Stopwatch from './components/Stopwatch';
import WindowSizeTracker from './components/WindowSizeTracker';

export default function App() {
  return (
    <div>
      <Stopwatch />
      <WindowSizeTracker />
    </div>
  );
}
