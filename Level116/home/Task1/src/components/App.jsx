import React from 'react'
import { useState } from 'react';
import CounterButton from './CounterButton';

const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
    setTimeout(alert(count + 1), 1000)
  }

  const decrement = () => {
    setCount(count - 1)
    setTimeout(alert(count - 1), 1000)
  
  }

  return (
    <div>
      <CounterButton addCount={increment} takeCount={decrement} Count={count} />
    </div>
  )
}

export default App;