import React, { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(() => count--)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(() => count++)}>+</button>
    </div>
  )
}

export default App;
