import React from 'react'
import { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev + 5)}>+5</button>
      <span>{count}</span>
    </div>
  )
}

export default App;