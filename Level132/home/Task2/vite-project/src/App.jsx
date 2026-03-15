import React from 'react'
import { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState('')

  return (
    <div>
      <h1>#1</h1>
      <button onClick={() => setCount(() => count++)}>+</button>
      <span>tick {count}s</span>
      <button onClick={() => setCount(() => count--)}>-</button>
      <br /><br />
      <h1>#2</h1>
      <div style={{backgroundColor: color}}>
        <button onClick={() => (setColor('steelblue'))}>steelblue</button><br /><br />
         <button onClick={() => (setColor('teal'))}>teal</button><br /><br />
         <button onClick={() => (setColor('aqua'))}>aqua</button>
      </div>
    </div>
  )
}

export default App;