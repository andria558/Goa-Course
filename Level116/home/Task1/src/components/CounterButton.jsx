import React from 'react'

const CounterButton = (prop) => {
  return (
    <div>
      <button onClick={prop.addCount}>+</button>
      <span>{prop.Count}</span>
      <button onClick={prop.takeCount}>-</button>
    </div>
  )
}

export default CounterButton;