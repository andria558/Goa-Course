import React from 'react'

const CounterDisplay = ({ count, onIncrement }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Add +1</button>
    </div>
  );
}

export default CounterDisplay;