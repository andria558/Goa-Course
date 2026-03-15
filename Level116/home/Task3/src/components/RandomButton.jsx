import React from 'react'

const RandomButton = (prop) => {
  return (
    <div>
      <button onClick={prop.GenerateRandom}>Generate</button>
    </div>
  )
}

export default RandomButton;