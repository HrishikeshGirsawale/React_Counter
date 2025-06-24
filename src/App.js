import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title">Welcome to My React App 🚀</h1>
      <p className="subtitle">Simple Counter</p>

      <div className="counter-box">
        <h2 className="count">{count}</h2>
        <div className="button-group">
          <button className="action-button" onClick={() => setCount(count + 1)}>Increase</button>
          <button className="action-button" onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default App;
