import React from 'react'
import style from './components/styles'

const App = () => {

  const btnStyle = {
    color: style.module.color,
    backgroundColor: style.module.backgroundColor,
    padding: style.module.padding,
    fontSize: style.module.fontSize
  }

  return (
    <div>
      <button style={btnStyle}>Hello!</button>
    </div>
  )
}

export default App;