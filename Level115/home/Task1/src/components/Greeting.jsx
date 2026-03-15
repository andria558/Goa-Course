import React from 'react'

const Greeting = ({ name }) => {
  return (
    <div>
      {name.map(n => {
        return <h1>Hello, {n}!</h1>
      })}
    </div>
  )
}

export default Greeting;